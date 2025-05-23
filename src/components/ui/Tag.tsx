import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props:HTMLAttributes<HTMLDivElement>){
    const {className,children,...otherProps} = props;
    return(
        <div className={twMerge("inline-flex border border-[#F0CF3B] gap-2 text-[#F0CF3B]  px-3 py-1 rounded-full uppercase items-center",className) } {...otherProps}>
            <span>
                &#10038;
            </span>
            <span className="text-[20px] ">
                {children}
            </span>
        </div>
    )
}