import styled from "styled-components";

export const Arrow = styled.div`
	&,
	&::before {
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 2px;
		z-index: -1;
	}

	&::before {
		content: "";
		transform: rotate(45deg);
		background: "white";
	}
`;

export const StyledTooltip = styled.div`
	padding: 16px;
	font-size: 16px;
	line-height: 130%;
	border-radius: 16px;
	max-width: 320px;
	z-index: 101;
	background: "white";
	color: "black";
	box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),
		0px 1px 1px rgba(0, 0, 0, 0.05);

	&[data-popper-placement^="top"] > ${Arrow} {
		bottom: -4px;
	}

	&[data-popper-placement^="bottom"] > ${Arrow} {
		top: -4px;
	}

	&[data-popper-placement^="left"] > ${Arrow} {
		right: -4px;
	}

	&[data-popper-placement^="right"] > ${Arrow} {
		left: -4px;
	}
`;
