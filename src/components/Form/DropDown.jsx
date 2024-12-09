import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ArrawIcon } from "../Icons";

const DropDown = ({
  input,
  title,
  data: _data,
  className,
  value,
  placeholder = "Select",
  onSelect,
  renderItem,
  classNameContainer,
  ClassNameTitle,
  disabled,
  rightComponent,
  picker = null,
  header,
  footer,
  noLabel = false,
  search: _search,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState(_data);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    if (_search && search.trim()) {
      const filteredData = _data.filter(
        (item) =>
          item.title &&
          typeof item.title === "string" &&
          item.title.toLowerCase().includes(search.toLowerCase())
      );
      setData(filteredData);
    } else {
      setData(_data);
    }
  }, [search, _data, _search]);

  return (
    <div
      className={twMerge(
        `relative cursor-pointer`,
        classNameContainer,
        disabled ? "opacity-40" : ""
      )}
      ref={wrapperRef}
    >
      {/* Trigger */}
      {picker ? (
        <div onClick={() => !disabled && setOpen(!isOpen)}>{picker?.()}</div>
      ) : (
        <>
          {title && <p className={ClassNameTitle}>{title}</p>}
          <div
            className={twMerge(
              `flex justify-between items-center rounded-xl px-3 py-2 outline-none border border-brand-background hover:border-brand-primary focus:border-brand-primary w-full ${className}`
            )}
            onClick={() => !disabled && setOpen(!isOpen)}
          >
            <div className="flex gap-1">
              {data?.find((item) => item.value === value)?.icon && (
                <img
                  className="rounded-2xl w-6 h-6 mx-2"
                  src={data?.find((item) => item.value === value)?.icon}
                  alt=""
                />
              )}
              {!noLabel && (
                <p className={twMerge("mr-2", ClassNameTitle)}>
                  {data?.find((item) => item.value === value)?.title ??
                    placeholder}
                </p>
              )}
            </div>
            <ArrawIcon
              className={`${isOpen ? "-rotate-90" : "rotate-90"} transition-all duration-300`}
              w={16}
              h={16}
            />
          </div>
        </>
      )}

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute bg-white text-black left-0 w-full rounded-md shadow-lg ring-0 black ring-opacity-5 focus:outline-none text-textColor z-[900] max-h-[40vh] overflow-y-scroll"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {header && header?.()}
          {_search && (
            <input
              className="w-full p-2 border-0 border-b outline-none"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search..."
            />
          )}
          <div>
            {data?.map((item, key) => {
              if (item?.hide) return null;
              return (
                <div
                  className={`drop-down-child px-4 py-2 text-sm flex hover:bg-[#f8f9fa] justify-between items-center ${
                    value === item.value ? "bg-[#9A718B20]" : ""
                  }`}
                  role="menuitem"
                  onClick={() => {
                    input?.onChange(item.value);
                    onSelect?.(item.value);
                    setOpen(false);
                  }}
                  key={`menuitem_${key}`}
                >
                  {value === item.value && (
                    <span className="text-base text-primary absolute left-[4px]">
                      •
                    </span>
                  )}
                  <div className="flex items-center">
                    {item?.icon && (
                      <img
                        className="rounded-2xl w-6 h-6 mx-2"
                        src={item.icon}
                        alt=""
                      />
                    )}
                    {renderItem?.(item) ?? <span>{item.title}</span>}
                  </div>
                  {rightComponent?.(item, key)}
                </div>
              );
            })}
          </div>
          {footer && <div className="p-2">{footer?.()}</div>}
        </div>
      )}
    </div>
  );
};

export default DropDown;
