import React, { useRef, useState } from 'react'

const Board = () => {
	const ref = useRef(null);

	//要素の位置を状態として記憶する
	const [pos, setPos] = useState({ x: 0, y: 0 });

	return (
		<div
			style={{
				width: "1000px",
				height: "1000px",
				position: "relative"
			}}
			onDrop={
				(e) => setPos({
					x: e.clientX - ref.current.clientWidth/2,
					y: e.clientY - ref.current.clientHeight/2
				})
			}
			onDragOver={
				(e) => e.preventDefault()
			}
		>
			<div
				style={{
					position: "absolute",
					top: pos.y + "px",
					left: pos.x + "px",
				}}
				draggable={true}
				ref={ref}
			>
				Prats
			</div>
		</div>

	);
};

export default Board