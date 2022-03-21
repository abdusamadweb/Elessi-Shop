import React from 'react';

const Sponsors = () => {
    const sponsor = [
        'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/brand-6_fb01cbcb-88e0-494a-a3e0-aca281ef0069.jpg?v=1565666779',
        'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/brand-5_ef0b41dd-ff08-49bb-8a1e-5ef6586b31bd.jpg?v=1565666768',
        'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/brand-4_f381573a-0855-4e9a-9a1c-391dc5c09f76.jpg?v=1565666758',
        'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/brand-1_24ec62fc-0512-4632-912f-8838b21ea77c.jpg?v=1565666726',
        'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/brand-3_6e0bd5b5-9738-4f13-baa1-622e10c332d7.jpg?v=1565666748',
        'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/brand-2_94081066-596b-4367-bef4-db076e6eb39a.jpg?v=1565666736'
    ]

    return (
        <div className='product__sponsors sponsors'>
            <ul className='sponsors__list row between'>
                {sponsor.map((item, index) => (
                    <li className='sponsors__item' key={index}>
                        <img src={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sponsors;