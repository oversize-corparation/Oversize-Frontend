'use client';

import {useState} from 'react';
import {BiSearch} from 'react-icons/bi';

const SearchInput = () => {
    const [searchText, setSearchText] = useState('');

    const products = [
        'Telefon',
        'Televizor',
        'Noutbook',
        'Kompyuter',
        'Kiyimlar',
        'Sumka',
    ];

    const filteredResults = searchText
        ? products.filter((item) =>
            item.toLowerCase().includes(searchText.toLowerCase())
        )
        : [];

    return (
        <div className="w-full mx-auto relative z-50">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-full px-4 py-2 rounded-2xl border bg-[#FFFFFF] text-black border-gray-300 focus:outline-none"
                />
                <BiSearch
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={22}
                />
            </div>

            {searchText && (
                <div className="absolute top-full mt-2 w-full bg-white border rounded-md shadow p-2 space-y-1 z-50">
                    {filteredResults.length > 0 ? (
                        filteredResults.map((item, i) => (
                            <div key={i} className="text-gray-800 hover:text-blue-600 cursor-pointer">
                                {item}
                            </div>
                        ))
                    ) : (
                        <span className="text-gray-400">Hech narsa topilmadi</span>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchInput;