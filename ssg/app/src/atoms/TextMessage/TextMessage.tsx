import React, { FunctionComponent } from "react"

type Props = {
    style: string
    message:string
}

const TextMesssage : FunctionComponent<Props> = (Props) => {
    return (
        <div className={Props.style}>
            {Props.message}
        </div>
    )
}

export default TextMesssage;