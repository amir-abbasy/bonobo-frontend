import React, { useState } from "react";
import { useEffect } from "react";
import { ArrawIcon } from "./Icons";
import { twMerge } from "tailwind-merge";
// import { useTranslation } from "react-i18next";
// https://dribbble.com/shots/25167890-Shipping-Web-App



const Title = (name, className) => {
  if (!name) return
  return <h1 className={twMerge("font-light text-slate-600 uppercase mb-4", className)}>
    {name}
  </h1>
}


export default function Table({
  data,
  renderItem,
  title,
  filterFields,
  className,
  classNameContainer,
  onChangePage,
  filterData,
  pageLength = 6
}) {
  const [filter, setFilter] = useState({
    data: filterFields,
    show: false,
    page: 1,
  });


  useEffect(() => {
    onChangePage?.(filter.page - 1);
  }, [filter.page]);



  return (
    <div className={twMerge('relative rounded-3xl bg-white px-6 py-2', classNameContainer)}>
      {/* <div className="flex justify-between items-center">
        <h1 className={"text-2xl"}>{title}</h1>
        {filterFields && (
          <button
            className=" bg-appBg rounded-full w-[50px] h-[50px] pt-1"
            onClick={() => setFilter({ ...filter, show: true })}
          >
            <span className="material-symbols-outlined">filter_alt</span>
          </button>
        )}
      </div> */}
      {/* 
      {showTitle && data && data.length > 0 && (
        <div className="my-4 flex justify-between items-center flex-1">
          {Object.keys(data[0]).map((item, key) => {
            console.log({item});
            
            return (
              <h1 className="uppercase text-xs text-textColor flex-1" key={"table_head_" + key}>
                {item.replace("_", " ")}
              </h1>
            );
          })}
        </div>
      )} */}
      {data && data.length > 0 ? (
        <div className={twMerge("overflow-x-scroll", className)}>
          {data.map((item, key) => {
            return renderItem(item, key, key > 0 ? _ => null : Title);
          })}
        </div>
      ) : (
        <div className="h-[1px] relative bg-gradient-to-r from-brand-secondary-600 via-transparent to-brand-secondary-600 my-8">
          <p className="text-center absolute left-2/4 -translate-x-12 -top-3 bg-appBg px-6 noise dark:text-brand-secondary-200">
            No data
          </p>
        </div>
      )}
      {/* Footer */}
      {data && pageLength > 1 && (<div className="flex justify-evenly md:justify-end  items-center mt-2 ">
        <button
          className=" dark:from-brand-secondary-950 dark:to-brand-primary-900 rounded-full h-[40px]  mr-2 flex items-center justify-center"
          onClick={() => {
            if (filter.page <= 1) return;
            setFilter((prev) => ({ ...prev, page: prev.page - 1 }));
          }}
        >

          <ArrawIcon className='rotate-180 mx-4' w={20} h={20} />
          <p className="font-medium hover:text-brand-primary">Prev</p>

        </button>
        <div className="flex items-center bg-gradient-to-tr from-secondary-500 to-primary-500 dark:from-secondary-950 dark:to-primary-900 rounded-full h-[40px] px-2 ">
          {new Array(pageLength).fill(1).map((num, key) => {
            let pageNum = filter.page > pageLength ? filter.page - (pageLength - (key + 1)) : pageLength - (pageLength - (key + 1))
            return <span
              className={`flex items-center justify-center w-[30px] h-[30px] cursor-pointer rounded-full hover:bg-[#ffffff40] ${pageNum == filter.page ? " bg-white text-brand-primary" : "text-black"
                }`}
              onClick={() => setFilter((prev) => ({ ...prev, page: pageNum }))}
            >
              <p>{pageNum}</p>
            </span>
          }
          )}
        </div>
        {!filterData?.isEmpty && filter.page < pageLength && (
          <button
            className="dark:from-brand-secondary-950 dark:to-brand-primary-900 rounded-full h-[40px]  ml-2 flex items-center justify-center"
            onClick={() => {
              if (filter.page < 1) return;
              setFilter((prev) => ({ ...prev, page: prev.page + 1 }));
            }}
          >
            <p className="font-medium hover:text-brand-primary">Next</p>
            <ArrawIcon className='mx-4' />
          </button>
        )}
      </div>)}
    </div>
  );
}
