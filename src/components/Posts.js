import React, { useState } from "react";
import { useSelector } from "react-redux";

function Posts() {
  const { posts } = useSelector((state) => state.posts);
  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(5)
  const [search, setSearch] = useState('')
  const indexOfLastItem = currentPage * itemPerPage
  const indexOfFirstItem = indexOfLastItem - itemPerPage

  const filterData = posts.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
  )

  const currentData = filterData.slice(indexOfFirstItem, indexOfLastItem)
  const totalPage = Math.ceil(filterData.length / itemPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleItemPerPageChange = (e) => {
    setItemPerPage(parseInt(e.target.value, 10))
    setCurrentPage(1)
  } 

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Data Table</h1>
      <div className="mb-4">
        <input
        type="text"
        placeholder="Search by Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded"
        />
      </div>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Id</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Occupation</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{user.age}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{user.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div>
          <label className="mr-2">Items Per Page :</label>
          <select
          value={itemPerPage}
          onChange={handleItemPerPageChange}
          className="border border-gray-500 px-2 py-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentData === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
          >
            Prev
          </button>
          <span>{`Page ${currentPage} of ${totalPage}`}</span>
          <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentData === totalPage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Posts;
