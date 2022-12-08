import { Space, Table, Button, Spin, Alert, message, Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import IProduct from '../../interfaces/product';
import { useGetProductsQuery } from '../../services/product';
import {NavLink} from 'react-router-dom'

type Props = {}

const text = 'Are you sure to delete this task?';
const confirm = () => {
    message.info('Remove successfully.');
};

const columns: ColumnsType<any> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (text) => <div>{text}</div>
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (text) => <img src={text} />
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        render: (text) => <div>{text}</div>
    },
    {
        title: 'Action',
        key: 'action',
        render: (product) => (
            <Space size="middle">
                <NavLink to={`/product/${product.id}/edit`}>
                    <Button type="primary">
                        Edit
                    </Button>
                </NavLink>
                <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button type="primary" danger>Remove</Button>
                </Popconfirm>
                
            </Space>
        ),
    },
];



const ProductList = (props: Props) => {
    const { data, isLoading, error }: any = useGetProductsQuery()
    const products: IProduct[] = data

    if (isLoading) 
        return <Space direction="vertical" style={{ width: '100%' }}>
                    <Spin tip="Loading" size="large">
                        <div className="content" />
                    </Spin>
                </Space>
    
    if (error) 
        return <Space direction="vertical" style={{ width: '100%' }}>
                    <Alert message="Invalid!!!" type="error" />
                </Space>
    return (
        <>
            <h1>Product Manage</h1>
            <Table columns={columns} dataSource={products} />
            <NavLink to={`/product-add`}>
                <Button type="primary">
                    Add New
                </Button>
            </NavLink>
        </>
    )
}

export default ProductList