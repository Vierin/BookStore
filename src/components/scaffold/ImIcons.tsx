import { FC } from 'react'
import * as ImIcons from 'react-icons/im'

import { useRenderClient } from '../../hooks/useRenderClient'

import { TypeIconName } from '../../shared/types/icons.types'

export const ImIcon: FC<{ name: TypeIconName }> = ({ name }) => {
	const { isRenderClient } = useRenderClient()

	const IconComponent = ImIcons[name]

	if (isRenderClient)
		return <IconComponent /> || <ImIcons.ImEllo />
	else return null
}