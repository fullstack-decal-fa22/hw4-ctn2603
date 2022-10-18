import React from "react";
import Color from './Color.js';

const Menu = (props) => {
	return (
		<div className="colorOptions">
			{
				["red", "pink", "blue", "green"].map((item, key) => {
					return (
						<Color
							key={key}
							color={item}
							handleClick={() => props.createPost(item)}
						/>
					);
				})
			}
		</div>
	);
};

export default Menu;
