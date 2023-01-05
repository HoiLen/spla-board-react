import { useRef, useState } from 'react'
import { IMAGES } from '../images.ts';

const Board = () => {
	console.log(IMAGES);
	const ref = useRef(null);

	//要素の位置を状態として記憶する
	const [dragging, setDragging] = useState({ key: "", x: 0, y: 0 });
	const [cards, setCards] = useState({
		id1: { t: "a", x: 100, y: 100, team: 'a' },
		id2: { t: "b", x: 200, y: 100, team: 'a' },
		id3: { t: "c", x: 300, y: 100, team: 'a' },
		id4: { t: "d", x: 400, y: 100, team: 'a' },
		id5: { t: "e", x: 500, y: 100, team: 'b' },
		id6: { t: "f", x: 600, y: 100, team: 'b' },
		id7: { t: "g", x: 700, y: 100, team: 'b' },
		id8: { t: "h", x: 800, y: 100, team: 'b' },
	});

	const update = (key, card) => setCards({ ...cards, [key]: card });

	const [editMode, setEditMode] = useState({ key: "" });





	return (
		<>

			<div>
				<select ref={ref} name={'weapon'} size={1}>
					<option value={'gun'}>シューター</option>
					<option value={'roller'}>ローラー</option>
					<option value={'charger'}>チャージャー</option>
					<option value={'slosher'}>スロッシャー</option>
					<option value={'spiner'}>スピナー</option>
					<option value={'manyuba'}>マニューバー</option>
					<option value={'shelter'}>シェルター</option>
					<option value={'braster'}>ブラスター</option>
					<option value={'hude'}>フデ</option>
					<option value={'stringer'}>ストリンガー</option>
					<option value={'wiper'}>ワイパー</option>
				</select>
				{/* {IMAGES.map((image) => (
					<img
						style={{
							borderRadius: "8px",
						}}
						width={200}
						height={200}
						src={image.src}
						alt={image.title}
					/>
				))} */}
			</div>

			<div
				style={{
					width: "1000px",
					height: "1000px",
					position: "relative"
				}}
				onDrop={
					(e) => {
						if (!dragging || !cards) return;
						update(dragging.key, {
							...cards[dragging.key],
							x: e.clientX - dragging.x,
							y: e.clientY - dragging.y
						});
					}
				}
				onDragOver={
					(e) => e.preventDefault()
				}
			>
				{Object.keys(cards).map((key) => (
					<div
						key={key}
						style={{
							position: "absolute",
							top: cards[key].y + "px",
							left: cards[key].x + "px",
							color: cards[key].team === 'a' ? "red" : "blue",
						}}
						draggable={true}
						onDragStart={(e) => setDragging({ key, x: e.clientX - cards[key].x, y: e.clientY - cards[key].y })}
						ref={ref}
					>
						{editMode.key === key ? (
							<textarea
								onBlur={(e) => setEditMode({ key: "" })}
								onChange={(e) => update(key, { ...cards[key], t: e.target.value })}
								defaultValue={cards[key].t}
							/>
						) : (
							<div onClick={(e) => setEditMode({ key })}>
								{cards[key].t}
							</div>
						)}
					</div>
				))}

			</div>

		</>
	);
};

export default Board