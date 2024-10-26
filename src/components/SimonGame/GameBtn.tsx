import React, { forwardRef } from "react";

interface GameBtnProps {
	border: string;
	bg: string;
}

const GameBtn = forwardRef(({ color, border, bg, onClick }, ref) => (
	<button
		color={color}
		type="button"
		className={`${border} ${bg} w-[175px] sm:w-[200px] h-[175px] sm:h[200px] m-2 duration-200 hover:scale-105`}
		onClick={onClick}
		ref={ref}
	/>
));

export default GameBtn;
