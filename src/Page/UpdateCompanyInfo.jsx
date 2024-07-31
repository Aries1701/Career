import React, { useState } from 'react';
import axios from 'axios';
import "./UpdateCompanyInfo.css"
import Form from 'react-bootstrap/Form';
const UpdateCompanyInfo = () => {
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [businessFields, setBusinessFields] = useState([]);
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedCompanyInfo = {
            companyName,
            email,
            phoneNumber,
            address,
            businessFields,
            description,
        };

        try {
            const response = await axios.put('/api/company-info', updatedCompanyInfo);
            console.log(response.data);
            // Xử lý sau khi cập nhật thành công
        } catch (error) {
            console.error(error);
            setErrors(error.response.data.errors);
        }
    };

    const handleBusinessFieldChange = (e) => {
        const selectedOptions = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setBusinessFields(selectedOptions);
    };

    return (
        <div>
            <h1>Cập nhật thông tin doanh nghiệp</h1>
            <form onSubmit={handleUpdate}>
                <div className="form-group mt-3 mb-3">
                    <label>Tên doanh nghiệp:</label>
                    <input
                        className="form-control form-control-sm" type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        maxLength={100}
                    />
                    {errors.companyName && <span className="error">{errors.companyName}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input className="form-control form-control-sm" type="email" value={email} readOnly />
                </div>
                <div>
                    <label>Số điện thoại:</label>
                    <input
                        className="form-control form-control-sm"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        pattern="[0-9]{10}"
                    />
                    {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                </div>
                <div>
                    <label>Địa chỉ:</label>
                    <input
                        className="form-control form-control-sm"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        maxLength={200}
                    />
                    {errors.address && <span className="error">{errors.address}</span>}
                </div>
                <div>
                    <label>Lĩnh vực kinh doanh:</label>

                    <Form.Select class="form-select form-select-sm" aria-label="Default select example" size='sm' required
                        value={businessFields}
                        onChange={handleBusinessFieldChange}>
                        <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                        <option value="Tài chính ngân hàng">Tài chính ngân hàng</option>
                        <option value="Bán lẻ">Bán lẻ</option>
                    </Form.Select>
                    {/* Thêm các lĩnh vực kinh doanh khác */}
                    {errors.businessFields && <span className="error">{errors.businessFields}</span>}
                </div>
                <div>
                    <label>Mô tả doanh nghiệp:</label>
                    <textarea
                        className="form-control form-control-sm"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={1000}
                    />
                    {errors.description && <span className="error">{errors.description}</span>}
                </div>
                <div className='button'>
                <button type="submit">Hoàn tất</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCompanyInfo;