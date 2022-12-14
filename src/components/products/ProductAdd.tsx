import React from 'react'
import { Button, Form, Input, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import {NavLink, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import IProduct from '../../interfaces/product';
import { useAddProductMutation } from '../../services/product';

const props: UploadProps = {
    name: 'file',
    action: 'https://api.cloudinary.com/v1_1/dywccbjry/image/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
        console.log(info);
        
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

const ProductAdd = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IProduct>()
    const [addProduct] = useAddProductMutation()
    const navigate = useNavigate()
    const onHandleAdd = (product: any) => {
        console.log(product.imgUrl.file.name);
        addProduct({...product, imgUrl: product.imgUrl.file.name})
        message.info('Add product successfully.')
        navigate('/products')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <h1 className='d-flex tex--center'>Add New Product Form</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={handleSubmit(onHandleAdd)}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input name!' }]}
                >
                    <Input {...register('name')}/>
                </Form.Item>

                <Form.Item
                    label="Image"
                    name="imgUrl"
                    rules={[{ required: true, message: 'Please choose image !' }]}
                >
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input price!' }]}
                >
                    <Input  {...register('price')}/>
                </Form.Item>

                <Form.Item
                    label="Quantity"
                    name="quantity"
                    rules={[{ required: true, message: 'Please input quantity!' }]}
                >
                    <Input  {...register('quantity')}/>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType='submit'>
                        Add
                    </Button>
                    <NavLink to={`/products`}>
                        <Button type="primary">
                            Back
                        </Button>
                    </NavLink>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ProductAdd