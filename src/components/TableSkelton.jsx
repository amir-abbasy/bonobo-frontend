import React from "react";


export default function TableSkeleton({ row = 5,
  className,
  itemClassName
}) {

  return (
    <div className={`relative w-full bg-white rounded-3xl ${className} `}>
      {new Array(row).fill("*").map((item, key) => {
        return <div
          key={'TableSkeleton_' + key}
          className={`${itemClassName} flex justify-between items-center p-5 bg-white dark:bg-app-dark`}
        >
          <div className="w-8 h-8 bg-gray-100 dark:bg-app-dark2 rounded-md skeleton" />
          <div className="w-[40%] h-4 bg-gray-100 dark:bg-app-dark2 rounded-md skeleton" />
          <div className="w-[10%] h-4 bg-gray-100 dark:bg-app-dark2 rounded-md skeleton" />
          <div className="w-[20%] h-4 bg-gray-100 dark:bg-app-dark2 rounded-md skeleton" />
          <div className="w-[10%] h-4 bg-gray-100 dark:bg-app-dark2 rounded-md skeleton" />
        </div>
      })
      }
    </div>
  );
}
