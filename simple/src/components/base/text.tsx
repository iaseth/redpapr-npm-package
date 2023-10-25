


interface TextProps {
    className?: string,
    children: React.ReactNode
}

export function G1 ({className="", children}: TextProps) { return <h1 className={"text-8xl font-bold leading-9 " + className}>{children}</h1> };
export function G2 ({className="", children}: TextProps) { return <h1 className={"text-7xl font-bold leading-9 " + className}>{children}</h1> };
export function G3 ({className="", children}: TextProps) { return <h1 className={"text-6xl font-bold leading-9 " + className}>{children}</h1> };
export function G4 ({className="", children}: TextProps) { return <h1 className={"text-5xl font-bold leading-9 " + className}>{children}</h1> };
export function G5 ({className="", children}: TextProps) { return <h1 className={"text-4xl font-bold leading-9 " + className}>{children}</h1> };
export function G6 ({className="", children}: TextProps) { return <h1 className={"text-3xl font-bold leading-9 " + className}>{children}</h1> };

export function H1 ({className="", children}: TextProps) { return <h1 className={"text-2xl font-bold leading-9 " + className}>{children}</h1> };
export function H2 ({className="", children}: TextProps) { return <h1 className={"text-xl font-bold leading-9 " + className}>{children}</h1> };
export function H3 ({className="", children}: TextProps) { return <h1 className={"text-lg font-bold leading-9 " + className}>{children}</h1> };
export function H4 ({className="", children}: TextProps) { return <h1 className={"text-base font-bold leading-9 " + className}>{children}</h1> };
export function H5 ({className="", children}: TextProps) { return <h1 className={"text-sm font-bold leading-9 " + className}>{children}</h1> };
export function H6 ({className="", children}: TextProps) { return <h1 className={"text-xs font-bold leading-9 " + className}>{children}</h1> };

export function P1 ({className="", children}: TextProps) { return <h1 className={"text-2xl " + className}>{children}</h1> };
export function P2 ({className="", children}: TextProps) { return <h1 className={"text-xl " + className}>{children}</h1> };
export function P3 ({className="", children}: TextProps) { return <h1 className={"text-lg " + className}>{children}</h1> };
export function P4 ({className="", children}: TextProps) { return <h1 className={"text-base " + className}>{children}</h1> };
export function P5 ({className="", children}: TextProps) { return <h1 className={"text-sm " + className}>{children}</h1> };
export function P6 ({className="", children}: TextProps) { return <h1 className={"text-xs " + className}>{children}</h1> };
