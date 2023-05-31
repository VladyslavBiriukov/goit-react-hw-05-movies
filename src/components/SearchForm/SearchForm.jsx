import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './SearchForm.styled';

function SearchForm({ onSubmit, defaultValue }) {
    const [searchValue, setSearchValue] = useState(defaultValue || '');
    const searchRef = useRef();

    const handleSubmitForm = event => {
        event.preventDefault();

        onSubmit(searchValue);
    };

    const handleChange = event => {
        setSearchValue(event.target.value);
    };

    return (
        <Form onSubmit={handleSubmitForm}>
            <Input
                value={searchValue}
                onChange={handleChange}
                ref={searchRef}
                type="text"
                required
            />
            <Button>Search</Button>
        </Form>
    );
}

SearchForm.propTypes = {
    defaultValue: PropTypes.string,
    onSubmit: PropTypes.func,
};

export default SearchForm;







// import React, { useRef } from 'react';
// import PropTypes from 'prop-types';
// import { Form, Input, Button } from './SearchForm.styled';

// function SearchForm({ onSubmit, defaultValue }) {
//     const searchRef = useRef();

//     const handleSubmitForm = event => {
//         event.preventDefault();

//         onSubmit(searchRef.current.value);
//     };

//     return (
//         <Form onSubmit={handleSubmitForm}>
//             <Input defaultValue={defaultValue} ref={searchRef} type="text" required />
//             <Button>Search</Button>
//         </Form>
//     );

// }

// SearchForm.propTypes = {
//     defaultValue: PropTypes.string,
//     onSubmit: PropTypes.func,
// };

// export default SearchForm;
