import Link from 'next/link';

type Props = {
    params: {
        productId: string
    }
}

export default function ProductDetails({params}: Props) {
    const products: Record<string, string> = {
        '1': 'Product 1',
        '2': 'Product 2',
        '3': 'Product 3',
    }

    const productName = products[params.productId] ?? `Product ${params.productId}`

    return (
        <div>
            <h1>{productName}</h1>
            <p>Details about product {params.productId}</p>
            <Link href="/products">Back to Products</Link>
        </div>
    );
}