import test from "ava";
import * as prismicT from "@prismicio/types";
import * as React from "react";

import { renderJSON } from "./__testutils__/renderJSON";

import { PrismicRichText, PrismicLink, PrismicProvider } from "../src";

type LinkProps = {
	href: string;
	rel?: string;
	target?: string;
	children?: React.ReactNode;
};

const Link = ({ href, rel, target, children }: LinkProps) => (
	<a data-href={href} data-rel={rel} data-target={target}>
		{children}
	</a>
);

test("returns null if passed nullish field", (t) => {
	const actualNull = renderJSON(<PrismicRichText field={null} />);
	const actualUndefined = renderJSON(<PrismicRichText field={undefined} />);
	const expected = null;

	t.deepEqual(actualNull, expected);
	t.deepEqual(actualUndefined, expected);
});

test("returns <h1> if type is heading1", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.heading1,
			text: "Heading 1",
			spans: [],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(<h1>Heading 1</h1>);

	t.deepEqual(actual, expected);
});

test("returns <h2> if type is heading2", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.heading2,
			text: "Heading 2",
			spans: [],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(<h2>Heading 2</h2>);

	t.deepEqual(actual, expected);
});

test("returns <h3> if type is heading3", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.heading3,
			text: "Heading 3",
			spans: [],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(<h3>Heading 3</h3>);

	t.deepEqual(actual, expected);
});

test("returns <h4> if type is heading4", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.heading4,
			text: "Heading 4",
			spans: [],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(<h4>Heading 4</h4>);

	t.deepEqual(actual, expected);
});

test("returns <h4> if type is heading3", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.heading4,
			text: "Heading 4",
			spans: [],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(<h4>Heading 4</h4>);

	t.deepEqual(actual, expected);
});

test("returns <h5> if type is heading4", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.heading5,
			text: "Heading 5",
			spans: [],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(<h5>Heading 5</h5>);

	t.deepEqual(actual, expected);
});

test("returns <h6> if type is heading6", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.heading6,
			text: "Heading 6",
			spans: [],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(<h6>Heading 6</h6>);

	t.deepEqual(actual, expected);
});

test("returns <p /> if type is paragraph", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.paragraph,
			text: "Paragraph bold",
			spans: [],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(<p>Paragraph bold</p>);

	t.deepEqual(actual, expected);
});

test("returns <pre /> if type is preformatted", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.preformatted,
			text: "Preformatted",
			spans: [],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(<pre>Preformatted</pre>);

	t.deepEqual(actual, expected);
});

test("returns <strong /> if type is strong", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.paragraph,
			text: "strong",
			spans: [
				{
					start: 0,
					end: "strong".length,
					type: prismicT.RichTextNodeType.strong,
				},
			],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(
		<p>
			<strong>strong</strong>
		</p>,
	);

	t.deepEqual(actual, expected);
});

test("returns <em /> if type is em", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.paragraph,
			text: "em",
			spans: [
				{
					start: 0,
					end: 2,
					type: prismicT.RichTextNodeType.em,
				},
			],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(
		<p>
			<em>em</em>
		</p>,
	);

	t.deepEqual(actual, expected);
});

test("returns <ul> <li> </li> </ul> if type is listItem", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.listItem,
			text: "listItem",
			spans: [],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(
		<ul>
			<li>listItem</li>
		</ul>,
	);

	t.deepEqual(actual, expected);
});

test("returns <ol> <li> </li> </ol> if type is listItem", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.oListItem,
			text: "oListItem",
			spans: [],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(
		<ol>
			<li>oListItem</li>
		</ol>,
	);

	t.deepEqual(actual, expected);
});

test("returns <image /> if type is image", (t) => {
	const url = "url";
	const alt = "alt";
	const copyright = "copyright";

	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.image,
			url,
			alt,
			copyright,
			dimensions: {
				width: 100,
				height: 100,
			},
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(
		<p className="block-img">
			<img src={url} alt={alt} data-copyright={copyright} />
		</p>,
	);

	t.deepEqual(actual, expected);
});

test("returns <image /> with undefined copyright if not provided", (t) => {
	const url = "url";
	const alt = "alt";

	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.image,
			url,
			alt,
			copyright: null,
			dimensions: {
				width: 100,
				height: 100,
			},
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(
		<p className="block-img">
			<img src={url} alt={alt} data-copyright={undefined} />
		</p>,
	);

	t.deepEqual(actual, expected);
});

test("returns <image /> wrapped in <PrismicLink />", (t) => {
	const url = "url";
	const alt = "alt";
	const copyright = "copyright";

	const linkField: prismicT.FilledLinkToDocumentField = {
		id: "id",
		uid: "uid",
		lang: "lang",
		tags: [],
		type: "page",
		link_type: prismicT.LinkType.Document,
		url: "url",
	};

	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.image,
			url,
			alt,
			copyright,
			dimensions: {
				width: 100,
				height: 100,
			},
			linkTo: linkField,
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(
		<p className="block-img">
			<PrismicLink field={linkField}>
				<img src={url} alt={alt} data-copyright={copyright} />
			</PrismicLink>
		</p>,
	);

	t.deepEqual(actual, expected);
});

test("returns <div /> with embedded html if type is embed", (t) => {
	const oembed: prismicT.EmbedField = {
		embed_url: "https://example.com",
		type: "rich",
		provider_name: "Prismic",
		html: "<marquee>Prismic is fun</marquee>",
	};
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.embed,
			oembed,
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(
		<div
			data-oembed={oembed.embed_url}
			data-oembed-type={oembed.type}
			data-oembed-provider={oembed.provider_name}
			dangerouslySetInnerHTML={{ __html: oembed.html as string }}
		/>,
	);

	t.deepEqual(actual, expected);
});

test("Returns <PrismicLink /> when type is hyperlink", (t) => {
	const data: prismicT.FilledLinkToDocumentField = {
		id: "id",
		uid: "uid",
		lang: "lang",
		tags: [],
		type: "page",
		link_type: prismicT.LinkType.Document,
		url: "url",
	};

	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.paragraph,
			text: "hyperlink",
			spans: [
				{
					start: 0,
					end: "hyperlink".length,
					type: prismicT.RichTextNodeType.hyperlink,
					data,
				},
			],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(
		<p>
			<a href={data.url} rel={undefined} target={undefined}>
				hyperlink
			</a>
		</p>,
	);

	t.deepEqual(actual, expected);
});

// TODO update isInternalURL to support an internal URL like "url"
test("Returns <PrismicLink /> with internalComponent from props", (t) => {
	const data: prismicT.FilledLinkToDocumentField = {
		id: "id",
		uid: "uid",
		lang: "lang",
		tags: [],
		type: "page",
		link_type: prismicT.LinkType.Document,
		url: "/url",
	};

	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.paragraph,
			text: "hyperlink",
			spans: [
				{
					start: 0,
					end: "hyperlink".length,
					type: prismicT.RichTextNodeType.hyperlink,
					data,
				},
			],
		},
	];

	const actual = renderJSON(
		<PrismicRichText internalLinkComponent={Link} field={field} />,
	);
	const expected = renderJSON(
		<p>
			<a data-href="/url" data-rel={undefined} data-target={undefined}>
				hyperlink
			</a>
		</p>,
	);

	t.deepEqual(actual, expected);
});

test("returns <span /> with label className if type is label", (t) => {
	const data = {
		label: "label",
	};
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.paragraph,
			text: "label",
			spans: [
				{
					type: prismicT.RichTextNodeType.label,
					start: 0,
					end: 5,
					data,
				},
			],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(
		<p>
			<span className={data.label}>label</span>
		</p>,
	);

	t.deepEqual(actual, expected);
});

test("renders line breaks as <br />", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.paragraph,
			text: "line 1\nline 2",
			spans: [],
		},
	];

	const actual = renderJSON(<PrismicRichText field={field} />);
	const expected = renderJSON(
		<p>
			line 1<br />
			line 2
		</p>,
	);

	t.deepEqual(actual, expected);
});

test("renders components from components prop", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.paragraph,
			text: "paragraph",
			spans: [],
		},
	];

	const actual = renderJSON(
		<PrismicRichText
			field={field}
			components={{ paragraph: () => <p>paragraph</p> }}
		/>,
	);
	const expected = renderJSON(<p>paragraph</p>);

	t.deepEqual(actual, expected);
});

test("renders components given to PrismicProvider", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.paragraph,
			text: "paragraph",
			spans: [],
		},
	];

	const actual = renderJSON(
		<PrismicProvider
			richTextComponents={{
				paragraph: () => <p>paragraph</p>,
			}}
		>
			<PrismicRichText field={field} />
		</PrismicProvider>,
	);
	const expected = renderJSON(<p>paragraph</p>);

	t.deepEqual(actual, expected);
});

test("components given to components prop overrides components given to PrismicProvider", (t) => {
	const field: prismicT.RichTextField = [
		{
			type: prismicT.RichTextNodeType.heading1,
			text: "heading",
			spans: [],
		},
		{
			type: prismicT.RichTextNodeType.paragraph,
			text: "paragraph",
			spans: [],
		},
	];

	const actual = renderJSON(
		<PrismicProvider
			richTextComponents={{
				heading1: () => <h1>PrismicProvider heading1</h1>,
				paragraph: () => <p>PrismicProvider paragraph</p>,
			}}
		>
			<PrismicRichText
				field={field}
				components={{
					paragraph: () => <p>overridden paragraph</p>,
				}}
			/>
		</PrismicProvider>,
	);
	const expected = renderJSON(
		<>
			<h1>PrismicProvider heading1</h1>
			<p>overridden paragraph</p>
		</>,
	);

	t.deepEqual(actual, expected);
});