import React, { useEffect, useMemo } from "react";
import { Router } from "@reach/router";
import Header from "../../components/header/header";
import Characters from "../characters/characters";
import WatchList from "../watch-list/watch-list";
import Route from "../../etc/route/route";
import cx from './home.module.scss';
import { useDispatch } from "react-redux";
import { getAllEpisodes } from "../../api/episodes-api";
import { setEpisodes } from "../../slice/episodes-slice";
import { ShortEpisode } from "../../interfaces/short-episode";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const headerItems = useMemo<Array<{ title: string, link: string }>>(() => [
    {
      title: 'Characters',
      link: '/characters'
    }, {
      title: 'My watch list',
      link: '/watch-list'
    }
  ], []);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const episodes = await getAllEpisodes();
      dispatch(setEpisodes(episodes.map((e:ShortEpisode) => ({ id: e.id, name: e.name, url: e.url }))));
    }

    fetchEpisodes();
  }, [dispatch]);

  return (
    <div className={cx.container}>
      <Header items={headerItems} />
      <Router>
        <Route path="/characters" component={Characters}/>
        <Route path="/watch-list" component={WatchList} />
      </Router>
    </div>
  )
}

export default Home;
