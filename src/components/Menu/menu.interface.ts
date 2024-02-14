import { TypeIconName } from '../../shared/types/icons.types'

export interface IMenuItem {
	icon: TypeIconName
	link: string
	title?: string
}

export interface IMenu {
	items: IMenuItem[]
}
