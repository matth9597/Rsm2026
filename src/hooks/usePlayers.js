import { useState, useEffect } from "react";

const SHEET_ID = "1ks52tn2sPB4Jvvk6brG-BOCp6-CB_JFceTcPsnUpVJE";
const TAB_NAME = "Players WEB";
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(TAB_NAME)}`;

export function usePlayers() {
  const [players, setPlayers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(CSV_URL)
      .then((res) => res.text())
      .then((text) => {
        const raw = text.match(
          /google\.visualization\.Query\.setResponse\(([\s\S]*?)\);/,
        );
        if (!raw) throw new Error("Invalid response from Google Sheets");

        const json = JSON.parse(raw[1]);
        const rows = json.table.rows;

        // Group by sportKey, then by team
        const data = {};
        rows.forEach((row) => {
          const sportKey = row.c[0]?.v || "";
          const team = row.c[1]?.v || "";
          const fullName = row.c[2]?.v || "";
          const jomStatus = row.c[3]?.v || "";
          const level = row.c[4]?.v || "";
          const sex = row.c[5]?.v || "";

          if (!sportKey || !team || !fullName) return;
          if (!data[sportKey]) data[sportKey] = {};
          if (!data[sportKey][team]) data[sportKey][team] = [];
          data[sportKey][team].push({ fullName, jomStatus, level, sex });
        });

        setPlayers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("usePlayers fetch error:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { players, loading, error };
}
