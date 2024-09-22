import blockConfig from '@smb/config/block';

import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import icon from './icon';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';

import './style.scss';

registerBlockType( metadata.name, {
	icon: {
		foreground: blockConfig.blockIconColor,
		src: icon,
	},
	edit,
	save,
	deprecated,
} );
