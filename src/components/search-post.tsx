import * as React from "react";
import { format, formatISO } from "date-fns";
import { Card } from "./card";
import styles from "@styles/search-post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@components/input";

interface Props {
  posts: {
    slug: string;
    data: {
      title: string;
      pubDate: number | Date;
      modDate?: number | Date;
    };
  }[];
}

interface IState {
  filteredData: {
    slug: string;
    data: {
      title: string;
      pubDate: number | Date;
      modDate?: number | Date;
    };
  }[];
  query: string;
  searchTerms: string[];
}

export function SearchPost({ posts }: Props) {
  const [state, setState] = React.useState<IState>({
    filteredData: [],
    query: "",
    searchTerms: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.trim();
    const searchTerms = query.split(/\s+/);

    const filteredData = posts.filter((post) => {
      const {
        data: { title },
      } = post;

      return searchTerms.every((term) =>
        title.toLowerCase().includes(term.toLowerCase()),
      );
    });
    setState({
      filteredData,
      query,
      searchTerms,
    });
  };

  const { filteredData, query, searchTerms } = state;
  const hasSearchResults = filteredData && query !== "";
  const result = hasSearchResults ? filteredData : null;

  return (
    <div className={styles.searchPost}>
      <div className={styles.searchForm}>
        <p>スペースで区切るとAND検索できます。</p>
        <form className={styles.search02}>
          <label htmlFor="search" className="sr-only">
            検索
          </label>
          <Input
            type="search"
            id="search"
            onChange={handleInputChange}
            placeholder="検索キーワードを入力"
          />
          <FontAwesomeIcon icon={faSearch} />
        </form>
        {query !== "" && (
          <p>{`${searchTerms.join(" ")} の検索結果: ${result?.length} 件`}</p>
        )}
      </div>
      {result && (
        <div className={styles.postList}>
          {result.map((post) => {
            const {
              slug,
              data: { title, pubDate, modDate },
            } = post;

            const pubDateISO = modDate
              ? formatISO(modDate)
              : formatISO(pubDate);
            const pubDateJA = modDate
              ? format(modDate, "yyyy年MM月dd日")
              : format(pubDate, "yyyy年MM月dd日");

            return (
              <Card
                key={slug}
                url={`/blog/post/${slug}/`}
                title={title}
                dateTime={pubDateISO}
                date={pubDateJA}
                isModified={!!modDate}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
