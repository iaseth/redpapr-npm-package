import React from "react";



interface DemoBoxProps {
    children: React.ReactNode,
    className?: string
}

export default function DemoBox ({
    className="",
    children
}: DemoBoxProps) {
    return (
        <section className={"px-4 py-2 bg-200 rounded my-2" + className}>{children}</section>
    );
}
