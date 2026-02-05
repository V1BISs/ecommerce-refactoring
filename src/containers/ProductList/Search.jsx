export const Search = ({ placeholder, searchTerm, handleSearchChange }) => {
    return (
        <div className="search">
            <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    )
}