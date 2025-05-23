import { isEmpty } from 'lodash';
import classnames from 'classnames';

import {
	RichText,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	__experimentalGetGapCSSValue as getGapCSSValue,
} from '@wordpress/block-editor';

import metadata from './block.json';
import { getColumnSize } from '@smb/helper';

export default [
	{
		attributes: {
			...metadata.attributes,
		},

		supports: {
			...metadata.supports,
		},

		save( { attributes, className } ) {
			const {
				backgroundColor,
				backgroundGradientColor,
				textColor,
				titleTagName,
				title,
				mediaId,
				mediaUrl,
				mediaAlt,
				mediaWidth,
				mediaHeight,
				caption,
				mediaPosition,
				verticalAlignment,
				mediaColumnSize,
				mobileOrder,
				href,
				linkTarget,
				rel,
				linkClass,
				mediaType,
				imageFill,
				focalPoint,
				splitPoint,
			} = attributes;

			const isFill = 'image' === mediaType && imageFill;

			const newRel = isEmpty( rel ) ? undefined : rel;

			const { textColumnWidth, mediaColumnWidth } =
				getColumnSize( mediaColumnSize );

			const classes = classnames( 'smb-media-text', className, {
				'smb-media-text--has-background':
					!! backgroundColor || !! backgroundGradientColor,
				[ `smb-media-text--mobile-${ mobileOrder }` ]: !! mobileOrder,
			} );

			const rowClasses = classnames( 'c-row', {
				'c-row--reverse': 'left' === mediaPosition,
				'c-row--top': ! isFill && 'top' === verticalAlignment,
				'c-row--middle': ! isFill && 'center' === verticalAlignment,
				'c-row--bottom': ! isFill && 'bottom' === verticalAlignment,
				'c-row--fill': isFill,
			} );

			const textColumnClasses = classnames(
				'c-row__col',
				'c-row__col--1-1',
				[ `c-row__col--${ splitPoint }-${ textColumnWidth }` ]
			);

			const imageColumnClasses = classnames(
				'c-row__col',
				'c-row__col--1-1',
				[ `c-row__col--${ splitPoint }-${ mediaColumnWidth }` ]
			);

			const image = (
				<img
					src={ mediaUrl }
					alt={ mediaAlt }
					width={ !! mediaWidth && mediaWidth }
					height={ !! mediaHeight && mediaHeight }
					className={ `wp-image-${ mediaId }` }
				/>
			);

			const video = (
				<video
					controls
					src={ mediaUrl }
					width={ !! mediaWidth && mediaWidth }
					height={ !! mediaHeight && mediaHeight }
				/>
			);

			let figure;
			if ( !! mediaUrl ) {
				if ( 'image' === mediaType || undefined === mediaType ) {
					if ( !! href ) {
						figure = (
							<a
								href={ href }
								target={ linkTarget }
								className={ linkClass }
								rel={ newRel }
							>
								{ image }
							</a>
						);
					} else {
						figure = image;
					}
				} else if ( 'video' === mediaType ) {
					figure = video;
				}
			}

			return (
				<div
					{ ...useBlockProps.save( {
						className: classes,
						style: {
							'--smb-media-text--background-color':
								backgroundColor,
							'--smb-media-text--background-image':
								backgroundGradientColor,
							'--smb-media-text--color': textColor,
							'--smb-media-text--image-position-x':
								isFill && !! focalPoint?.x
									? `${ focalPoint.x * 100 }%`
									: undefined,
							'--smb-media-text--image-position-y':
								isFill && !! focalPoint?.y
									? `${ focalPoint.y * 100 }%`
									: undefined,
							'--smb-media-text--gap':
								getGapCSSValue(
									attributes?.style?.spacing?.blockGap
								) || undefined,
						},
						'data-sm-split-point': splitPoint,
					} ) }
				>
					<div className={ rowClasses }>
						<div className={ textColumnClasses }>
							<div className="smb-media-text__contents-wrapper">
								{ ! RichText.isEmpty( title ) &&
									'none' !== titleTagName && (
										<RichText.Content
											className="smb-media-text__title"
											tagName={ titleTagName }
											value={ title }
										/>
									) }

								<div
									{ ...useInnerBlocksProps.save( {
										className: 'smb-media-text__body',
									} ) }
								/>
							</div>
						</div>

						<div className={ imageColumnClasses }>
							<div
								className={ classnames(
									'smb-media-text__figure',
									{
										'smb-media-text__figure--fill': isFill,
									}
								) }
							>
								{ figure }
							</div>

							{ ! RichText.isEmpty( caption ) && (
								<RichText.Content
									tagName="div"
									className="smb-media-text__caption"
									value={ caption }
								/>
							) }
						</div>
					</div>
				</div>
			);
		},
	},
	{
		attributes: {
			...metadata.attributes,
		},

		supports: {
			...metadata.supports,
		},

		save( { attributes, className } ) {
			const {
				titleTagName,
				title,
				mediaId,
				mediaUrl,
				mediaAlt,
				mediaWidth,
				mediaHeight,
				mediaType,
				caption,
				mediaPosition,
				verticalAlignment,
				mediaColumnSize,
				mobileOrder,
				href,
				rel,
				linkClass,
				linkTarget,
			} = attributes;

			const newRel = isEmpty( rel ) ? undefined : rel;

			const { textColumnWidth, mediaColumnWidth } =
				getColumnSize( mediaColumnSize );

			const classes = classnames( 'smb-media-text', className, {
				[ `smb-media-text--mobile-${ mobileOrder }` ]: !! mobileOrder,
			} );

			const rowClasses = classnames( 'c-row', 'c-row--margin', {
				'c-row--reverse': 'left' === mediaPosition,
				'c-row--top': 'top' === verticalAlignment,
				'c-row--middle': 'center' === verticalAlignment,
				'c-row--bottom': 'bottom' === verticalAlignment,
			} );

			const textColumnClasses = classnames(
				'c-row__col',
				'c-row__col--1-1',
				[ `c-row__col--lg-${ textColumnWidth }` ]
			);

			const imageColumnClasses = classnames(
				'c-row__col',
				'c-row__col--1-1',
				[ `c-row__col--lg-${ mediaColumnWidth }` ]
			);

			const image = (
				<img
					src={ mediaUrl }
					alt={ mediaAlt }
					width={ !! mediaWidth && mediaWidth }
					height={ !! mediaHeight && mediaHeight }
					className={ `wp-image-${ mediaId }` }
				/>
			);

			const video = (
				<video
					controls
					src={ mediaUrl }
					width={ !! mediaWidth && mediaWidth }
					height={ !! mediaHeight && mediaHeight }
				/>
			);

			let figure;
			if ( !! mediaUrl ) {
				if ( 'image' === mediaType || undefined === mediaType ) {
					if ( !! href ) {
						figure = (
							<a
								href={ href }
								target={ linkTarget }
								className={ linkClass }
								rel={ newRel }
							>
								{ image }
							</a>
						);
					} else {
						figure = image;
					}
				} else if ( 'video' === mediaType ) {
					figure = video;
				}
			}

			return (
				<div { ...useBlockProps.save( { className: classes } ) }>
					<div className={ rowClasses }>
						<div className={ textColumnClasses }>
							{ ! RichText.isEmpty( title ) &&
								'none' !== titleTagName && (
									<RichText.Content
										className="smb-media-text__title"
										tagName={ titleTagName }
										value={ title }
									/>
								) }

							<div
								{ ...useInnerBlocksProps.save( {
									className: 'smb-media-text__body',
								} ) }
							/>
						</div>

						<div className={ imageColumnClasses }>
							<div className="smb-media-text__figure">
								{ figure }
							</div>

							{ ! RichText.isEmpty( caption ) && (
								<RichText.Content
									tagName="div"
									className="smb-media-text__caption"
									value={ caption }
								/>
							) }
						</div>
					</div>
				</div>
			);
		},
	},
	{
		attributes: {
			...metadata.attributes,
			url: {
				type: 'string',
				default: '',
			},
			imageMediaType: {
				type: 'string',
			},
			imageSizeSlug: {
				type: 'string',
				default: 'full',
			},
			imagePosition: {
				type: 'string',
				default: 'right',
			},
			imageID: {
				type: 'number',
				default: 0,
			},
			imageURL: {
				type: 'string',
				source: 'attribute',
				selector:
					'.smb-media-text__figure img, .smb-media-text__figure video',
				attribute: 'src',
				default: '',
			},
			imageAlt: {
				type: 'string',
				source: 'attribute',
				selector: '.smb-media-text__figure img',
				attribute: 'alt',
				default: '',
			},
			imageWidth: {
				type: 'string',
				source: 'attribute',
				selector:
					'.smb-media-text__figure img, .smb-media-text__figure video',
				attribute: 'width',
				default: '',
			},
			imageHeight: {
				type: 'string',
				source: 'attribute',
				selector:
					'.smb-media-text__figure img, .smb-media-text__figure video',
				attribute: 'height',
				default: '',
			},
			imageColumnSize: {
				type: 'string',
				default: 66,
			},
			target: {
				type: 'string',
				default: '_self',
			},
		},

		migrate( attributes ) {
			return {
				...attributes,
				href: attributes.url,
				mediaType: attributes.imageMediaType,
				mediaSizeSlug: attributes.imageSizeSlug,
				mediaPosition: attributes.imagePosition,
				mediaId: attributes.imageID,
				mediaUrl: attributes.imageURL,
				mediaAlt: attributes.imageAlt,
				mediaWidth: attributes.imageWidth,
				mediaHeight: attributes.imageHeight,
				mediaColumnSize: attributes.imageColumnSize,
				linkTarget: attributes.target,
			};
		},

		save( { attributes, className } ) {
			const {
				titleTagName,
				title,
				imageID,
				imageURL,
				imageAlt,
				imageWidth,
				imageHeight,
				imageMediaType,
				caption,
				imagePosition,
				verticalAlignment,
				imageColumnSize,
				mobileOrder,
				url,
				target,
			} = attributes;

			const { textColumnWidth, imageColumnWidth } =
				getColumnSize( imageColumnSize );

			const classes = classnames( 'smb-media-text', className, {
				[ `smb-media-text--mobile-${ mobileOrder }` ]: !! mobileOrder,
			} );

			const rowClasses = classnames( 'c-row', 'c-row--margin', {
				'c-row--reverse': 'left' === imagePosition,
				'c-row--top': 'top' === verticalAlignment,
				'c-row--middle': 'center' === verticalAlignment,
				'c-row--bottom': 'bottom' === verticalAlignment,
			} );

			const textColumnClasses = classnames(
				'c-row__col',
				'c-row__col--1-1',
				[ `c-row__col--lg-${ textColumnWidth }` ]
			);

			const imageColumnClasses = classnames(
				'c-row__col',
				'c-row__col--1-1',
				[ `c-row__col--lg-${ imageColumnWidth }` ]
			);

			const image = (
				<img
					src={ imageURL }
					alt={ imageAlt }
					width={ !! imageWidth && imageWidth }
					height={ !! imageHeight && imageHeight }
					className={ `wp-image-${ imageID }` }
				/>
			);

			const video = (
				<video
					controls
					src={ imageURL }
					width={ !! imageWidth && imageWidth }
					height={ !! imageHeight && imageHeight }
				/>
			);

			let figure;
			if ( !! imageURL ) {
				if (
					'image' === imageMediaType ||
					undefined === imageMediaType
				) {
					if ( !! url ) {
						figure = (
							<a
								href={ url }
								target={
									'_self' === target ? undefined : target
								}
								rel={
									'_self' === target
										? undefined
										: 'noopener noreferrer'
								}
							>
								{ image }
							</a>
						);
					} else {
						figure = image;
					}
				} else if ( 'video' === imageMediaType ) {
					figure = video;
				}
			}

			return (
				<div { ...useBlockProps.save( { className: classes } ) }>
					<div className={ rowClasses }>
						<div className={ textColumnClasses }>
							{ ! RichText.isEmpty( title ) &&
								'none' !== titleTagName && (
									<RichText.Content
										className="smb-media-text__title"
										tagName={ titleTagName }
										value={ title }
									/>
								) }

							<div className="smb-media-text__body">
								<InnerBlocks.Content />
							</div>
						</div>

						<div className={ imageColumnClasses }>
							<div className="smb-media-text__figure">
								{ figure }
							</div>

							{ ! RichText.isEmpty( caption ) && (
								<div className="smb-media-text__caption">
									<RichText.Content value={ caption } />
								</div>
							) }
						</div>
					</div>
				</div>
			);
		},
	},
	{
		attributes: {
			...metadata.attributes,
			url: {
				type: 'string',
				default: '',
			},
			imageMediaType: {
				type: 'string',
			},
			imageSizeSlug: {
				type: 'string',
				default: 'full',
			},
			imagePosition: {
				type: 'string',
				default: 'right',
			},
			imageID: {
				type: 'number',
				default: 0,
			},
			imageURL: {
				type: 'string',
				source: 'attribute',
				selector:
					'.smb-media-text__figure img, .smb-media-text__figure video',
				attribute: 'src',
				default: '',
			},
			imageAlt: {
				type: 'string',
				source: 'attribute',
				selector: '.smb-media-text__figure img',
				attribute: 'alt',
				default: '',
			},
			imageWidth: {
				type: 'string',
				source: 'attribute',
				selector:
					'.smb-media-text__figure img, .smb-media-text__figure video',
				attribute: 'width',
				default: '',
			},
			imageHeight: {
				type: 'string',
				source: 'attribute',
				selector:
					'.smb-media-text__figure img, .smb-media-text__figure video',
				attribute: 'height',
				default: '',
			},
			imageColumnSize: {
				type: 'string',
				default: 66,
			},
			target: {
				type: 'string',
				default: '_self',
			},
		},

		save( { attributes } ) {
			const { title, imageID, imageURL, imagePosition, imageColumnSize } =
				attributes;

			const { textColumnWidth, imageColumnWidth } =
				getColumnSize( imageColumnSize );

			return (
				<div className="smb-media-text">
					<div
						className={ classnames(
							'c-row',
							'c-row--margin',
							'c-row--middle',
							{ 'c-row--reverse': 'left' === imagePosition }
						) }
					>
						<div
							className={ `c-row__col c-row__col--1-1 c-row__col--lg-${ textColumnWidth }` }
						>
							{ ! RichText.isEmpty( title ) && (
								<h2 className="smb-media-text__title">
									<RichText.Content value={ title } />
								</h2>
							) }
							<div className="smb-media-text__body">
								<InnerBlocks.Content />
							</div>
						</div>
						<div
							className={ `c-row__col c-row__col--1-1 c-row__col--lg-${ imageColumnWidth }` }
						>
							<div className="smb-media-text__figure">
								{ imageURL && (
									<img
										src={ imageURL }
										alt=""
										className={ `wp-image-${ imageID }` }
									/>
								) }
							</div>
						</div>
					</div>
				</div>
			);
		},
	},
	{
		attributes: {
			...metadata.attributes,
			url: {
				type: 'string',
				default: '',
			},
			imageMediaType: {
				type: 'string',
			},
			imageSizeSlug: {
				type: 'string',
				default: 'full',
			},
			imagePosition: {
				type: 'string',
				default: 'right',
			},
			imageID: {
				type: 'number',
				default: 0,
			},
			imageURL: {
				type: 'string',
				source: 'attribute',
				selector:
					'.smb-media-text__figure img, .smb-media-text__figure video',
				attribute: 'src',
				default: '',
			},
			imageAlt: {
				type: 'string',
				source: 'attribute',
				selector: '.smb-media-text__figure img',
				attribute: 'alt',
				default: '',
			},
			imageWidth: {
				type: 'string',
				source: 'attribute',
				selector:
					'.smb-media-text__figure img, .smb-media-text__figure video',
				attribute: 'width',
				default: '',
			},
			imageHeight: {
				type: 'string',
				source: 'attribute',
				selector:
					'.smb-media-text__figure img, .smb-media-text__figure video',
				attribute: 'height',
				default: '',
			},
			imageColumnSize: {
				type: 'string',
				default: 66,
			},
			target: {
				type: 'string',
				default: '_self',
			},
		},

		save( { attributes } ) {
			const { title, imageURL, imagePosition, imageColumnSize } =
				attributes;

			const { textColumnWidth, imageColumnWidth } =
				getColumnSize( imageColumnSize );

			return (
				<div className="smb-media-text">
					<div
						className={ classnames(
							'c-row',
							'c-row--margin',
							'c-row--middle',
							{ 'c-row--reverse': 'left' === imagePosition }
						) }
					>
						<div
							className={ `c-row__col c-row__col--1-1 c-row__col--lg-${ textColumnWidth }` }
						>
							{ ! RichText.isEmpty( title ) && (
								<h2 className="smb-media-text__title">
									<RichText.Content value={ title } />
								</h2>
							) }
							<div className="smb-media-text__body">
								<InnerBlocks.Content />
							</div>
						</div>
						<div
							className={ `c-row__col c-row__col--1-1 c-row__col--lg-${ imageColumnWidth }` }
						>
							<div className="smb-media-text__figure">
								{ imageURL && <img src={ imageURL } alt="" /> }
							</div>
						</div>
					</div>
				</div>
			);
		},
	},
];
