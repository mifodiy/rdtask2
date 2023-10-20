import { FC } from 'react';

const CategoryHeader:FC = () => {
  return (
    <div className="category-header">
      <div className="category-header__name">Category</div>
      <div className="category-header__active">Active</div>
      <div className="category-header__archive">Archived</div>
    </div>
  )
}

export default CategoryHeader;