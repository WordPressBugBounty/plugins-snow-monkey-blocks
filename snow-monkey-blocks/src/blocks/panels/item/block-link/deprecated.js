import classnames from 'classnames';

import {
	useBlockProps,
	useInnerBlocksProps,
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import metadata from './block.json';

const blockAttributes = metadata.attributes;
const blockSupports = metadata.supports;

export default [
	{
		attributes: {
			...blockAttributes,
			linkURL: {
				...blockAttributes.linkURL,
				default: '',
			},
			linkTarget: {
				...blockAttributes.linkTarget,
				default: '_self',
			},
		},

		supports: {
			...blockSupports,
		},

		save( { attributes } ) {
			const { linkURL, linkTarget } = attributes;

			const colorProps = getColorClassesAndStyles( {
				style: {
					color: {
						...attributes?.style?.color,
					},
				},
				backgroundColor: attributes?.backgroundColor || undefined,
				textColor: attributes?.textColor || undefined,
				gradient: attributes?.gradient || undefined,
			} );

			const classes = 'c-row__col';

			const itemClasses = classnames(
				'smb-panels__item',
				'smb-panels__item--block-link',
				colorProps?.className
			);

			const itemStyles = colorProps?.style;

			const actionClasses = classnames(
				'smb-panels__item__action',
				'smb-panels__item__action--nolabel'
			);

			return (
				<div { ...useBlockProps.save( { className: classes } ) }>
					<div className={ itemClasses } style={ itemStyles }>
						<div
							{ ...useInnerBlocksProps.save( {
								className: 'smb-panels__item__body',
							} ) }
						/>

						{ !! linkURL && (
							<div className={ actionClasses }>
								<a
									href={ linkURL }
									target={
										'_self' === linkTarget
											? undefined
											: linkTarget
									}
									rel={
										'_self' === linkTarget
											? undefined
											: 'noopener noreferrer'
									}
								>
									<span className="screen-reader-text">
										{ __( 'Link', 'snow-monkey-blocks' ) }
									</span>
								</a>
							</div>
						) }
					</div>
				</div>
			);
		},
	},
	{
		attributes: {
			...blockAttributes,
			backgroundColor: {
				type: 'string',
			},
			backgroundGradientColor: {
				type: 'string',
			},
			textColor: {
				type: 'string',
			},
			linkURL: {
				...blockAttributes.linkURL,
				default: '',
			},
			linkTarget: {
				...blockAttributes.linkTarget,
				default: '_self',
			},
		},

		supports: {
			...blockSupports,
			color: {
				background: false,
				gradients: false,
				text: false,
				link: false,
			},
		},

		migrate( attributes ) {
			const { backgroundColor, backgroundGradientColor, textColor } =
				attributes;

			let newAttributes = { ...attributes };

			if ( !! backgroundColor ) {
				newAttributes = {
					...newAttributes,
					backgroundColor: undefined,
					style: {
						...newAttributes?.style,
						color: {
							...newAttributes?.style?.color,
							background: backgroundColor,
						},
					},
				};
			}

			if ( !! backgroundGradientColor ) {
				newAttributes = {
					...newAttributes,
					backgroundGradientColor: undefined,
					style: {
						...newAttributes?.style,
						color: {
							...newAttributes?.style?.color,
							gradient: backgroundGradientColor,
						},
					},
				};
			}

			if ( !! textColor ) {
				newAttributes = {
					...newAttributes,
					textColor: undefined,
					style: {
						...newAttributes?.style,
						color: {
							...newAttributes?.style?.color,
							text: textColor,
						},
					},
				};
			}

			return newAttributes;
		},

		save( { attributes, className } ) {
			const {
				backgroundColor,
				backgroundGradientColor,
				textColor,
				linkURL,
				linkTarget,
			} = attributes;

			const classes = classnames( 'c-row__col', className );

			const itemClasses = classnames(
				'smb-panels__item',
				'smb-panels__item--block-link'
			);

			const actionClasses = classnames(
				'smb-panels__item__action',
				'smb-panels__item__action--nolabel'
			);

			const itemStyles = {
				'--smb-panel--background-color': backgroundColor,
				'--smb-panel--background-image': backgroundGradientColor,
				'--smb-panel--color': textColor,
			};

			return (
				<div { ...useBlockProps.save( { className: classes } ) }>
					<div className={ itemClasses } style={ itemStyles }>
						<div
							{ ...useInnerBlocksProps.save( {
								className: 'smb-panels__item__body',
							} ) }
						/>

						{ !! linkURL && (
							<div className={ actionClasses }>
								<a
									href={ linkURL }
									target={
										'_self' === linkTarget
											? undefined
											: linkTarget
									}
									rel={
										'_self' === linkTarget
											? undefined
											: 'noopener noreferrer'
									}
								>
									<span className="screen-reader-text">
										{ __( 'Link', 'snow-monkey-blocks' ) }
									</span>
								</a>
							</div>
						) }
					</div>
				</div>
			);
		},
	},
];
