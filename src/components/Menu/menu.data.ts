import { IMenu } from './menu.interface'

export const mainMenu: IMenu = {
	items: [
		{
			icon: 'ImBooks',
			title: 'Books',
			link: '/'
		},
		{
			icon: 'ImHeadphones',
			title: 'AudioBooks',
			link: '/audiobooks'
		}
	]
}

export const rightMenu: IMenu = {
	items: [
		{
			icon: 'ImBookmark',
			link: '/favorites'
		},
		{
			icon: 'ImCart',
			link: '/cart'
		},
		{
			icon: 'ImUser',
			link: '/auth'
		}
	]
}
