"use client";

import { HackModel } from "@/lib/model";
import classes from "./HacksLoader.module.css";
import TitleCover from "@/ui/TitleCover";
import HackCard from "../hero_comp/HackCard";
import { useMemo, useState } from "react";
import Pagination from "@/ui/Pagination";
import Fuse from "fuse.js";
import Image from "next/image";

const HacksLoader: React.FC<{ hacks: HackModel[]; text: string }> = ({
  hacks,
  text,
}) => {
  const hacksPerPage = 4;
  const [pageno, setPageno] = useState<number>(1);
  const [direction, setDirection] = useState<string>("forward");
  const [query, setQuery] = useState("");
  const [selectedHack, setSelectedHack] = useState<HackModel | null>(null);

  const fuse = useMemo(() => {
    return new Fuse(hacks, {
      keys: ["title"],
      threshold: 0.3,
    });
  }, [hacks]);

  const filteredHacks =
    query.trim() === ""
      ? hacks
      : fuse.search(query).map((result) => result.item);

  const displayHacks = selectedHack
    ? [selectedHack]
    : filteredHacks;

  const totalPages: number = Math.ceil(displayHacks.length / hacksPerPage);
  const firstHackIndex: number = pageno * hacksPerPage - hacksPerPage;
  const lastHackIndex: number = hacksPerPage * pageno;

  const getPageno = (pageno: number) => setPageno(pageno);

  const getRange = (pno: number, direction: string) => {
    if (direction === "forward") {
      let start = pno - 1;
      let end = start + 5;
      if (end > totalPages) {
        end = totalPages;
        start = end - 5;
      }
      if (start < 0) start = 0;
      return { first: start, last: end };
    } else {
      let end = pno;
      let start = end - 5;
      if (start < 0) {
        start = 0;
        end = 5;
      }
      return { first: start, last: end };
    }
  };

  const { first, last } = getRange(pageno, direction);

  const goToPage = (page: number, dir = "forward") => {
    setDirection(dir);
    setPageno(Math.min(Math.max(page, 1), totalPages));
  };

  const handleResultClick = (hack: HackModel) => {
    setSelectedHack(hack);
    setQuery(hack.title);
    setPageno(1)
  };

  const resetSearch = () => {
    setQuery("");
    setSelectedHack(null);
    setPageno(1);
  };

  return (
    <section className={classes.hacks_Section}>
      <TitleCover text={text} />
      
      <div className={classes.search_result}>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedHack(null);
            setPageno(1);
          }}
          placeholder="Search hacks..."
          className={classes.search_bar}
        />
        <div className={classes.search_hover_line}></div>
        {query && !selectedHack && (
          <ul className={classes.query_result}>
            {filteredHacks.slice(0, 6).map((hack, i) => (
              <li
                key={i}
                className={classes.result_item}
                onClick={() => handleResultClick(hack)}
              >
                <strong>{hack.title}</strong>
                <Image src="https://i.ibb.co/svbn908/search-1.png" alt="search" width={25} height={25} style={{marginRight:"10px"}} />
              </li>
            ))}
          </ul>
        )}
        {query && selectedHack && (
          <button onClick={resetSearch} className={classes.reset_search}>
            Reset 
          </button>
        )}
      </div>

      <div className={classes.hacks_holder}>
        {displayHacks.length > 0 ? (
          displayHacks.slice(firstHackIndex, lastHackIndex).map((hack, i) => (
            <HackCard
              key={i}
              title={hack.title}
              image={hack.image}
              username={hack.username}
              trending={hack.trending}
              slug={hack.slug}
              postedOn={hack.postedOn}
              showuser={true}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No hacks found</p>
        )}
      </div>

      {!selectedHack && displayHacks.length > hacksPerPage && (
        <div className={classes.pageno}>
          <Pagination
            pageno={pageno}
            totalPages={totalPages}
            getPageno={getPageno}
            nextPage={goToPage.bind(null, pageno + 1, "backward")}
            next5Pages={goToPage.bind(null, pageno + 5, "forward")}
            previousPage={goToPage.bind(null, pageno - 1, "backward")}
            previous5Pages={goToPage.bind(null, pageno - 5, "forward")}
            finalPagenos={{ first, last }}
          />
        </div>
      )}
    </section>
  );
};

export default HacksLoader;
