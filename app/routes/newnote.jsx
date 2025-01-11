import { useState } from "react";
import NewNoteForm from "../components/NewNoteInput/NewNote";
import { getStoredNotes, storeNotes } from "../data/notes";
import { json, redirect, useLoaderData } from "@remix-run/react";
import NoteList from "../components/List/NoteList";
import { links as NoteListStyles } from "../components/List/NoteList";


export default function NewNote() {
    const notes = useLoaderData();
    return (
        <main className="">
            <div className="relative overflow-hidden py-24 lg:py-32 flex flex-col justify-center items-center">
                <NewNoteForm />
                <NoteList notes={notes} />
            </div>
        </main>
    )
}

export async function loader() {
    const notes = await getStoredNotes();
    return notes;
}

export async function action({ request }) {
    const formData = await request.formData()
    console.log('✌️formData --->', formData);
    const noteData = Object.fromEntries(formData)
    const existingNotes = await getStoredNotes()
    noteData.id = new Date().getTime();
    const updatedNotes = existingNotes.concat(noteData)
    await storeNotes(updatedNotes)
    return redirect("/notes")
}

export function links() {
    return [...NoteListStyles()]
}