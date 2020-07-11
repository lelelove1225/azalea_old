import React, { FunctionComponent } from "react"

type Props = {
    style: string,
    message: string
}

const Button : FunctionComponent<Props> = (Props) => {
return <button type="button" className={Props.style}>{Props.message}</button>
}