import React from 'react'
import { ShinyRotatingBorderButton } from '../Button/shiny-rotating-border-button'

function HeroCenterWithImage() {
    return (
        <div className="relative overflow-hidden py-24 lg:py-32 flex justify-center items-center">
            <div className="container">
                <div className="max-w-2xl text-center mx-auto">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        A better way to keep track of your notes
                    </h1>
                    <p className="mt-3 text-xl text-muted-foreground">
                        Try our early beta and never loose track of your notes again!
                    </p>
                </div>
                <div className="mt-10 flex justify-center items-center">
                    <ShinyRotatingBorderButton to={"/newnote"} className={"bg-slate-300"}>
                        Try Now!
                    </ShinyRotatingBorderButton>
                </div>
            </div>
        </div>
    )
}

export default HeroCenterWithImage
