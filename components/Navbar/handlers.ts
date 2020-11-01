import { ethAPI } from "../../scripts/ethereum"

export const updateStateItem = ({ item, newValue, prevState }) => {
	return {...prevState, [item]: newValue }
}