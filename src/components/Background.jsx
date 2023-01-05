import {Board} from "./index"
import background from "../img/smesi_asari.jpg";
const Background = () => {
  return (
	<div style={{
		backgroundImage: `url(${background})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	}}>
		<Board />
	</div>
  )
}

export default Background