import { useLoaderData } from "@remix-run/react"
import { getStoredNotes } from "../data/notes"

export default function NoteDetailsPage() {
    const data = useLoaderData()
    return (
        <main id="note-details">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </main>
    )
}

export async function loader({ params }) {
    const { id } = params
    const allentries = await getStoredNotes()
    const speceficEntry = allentries.find((entry) => entry.id == id)
    return speceficEntry
}