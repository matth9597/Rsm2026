import { useState, useEffect } from "react";

const SHEET_ID = "1ks52tn2sPB4Jvvk6brG-BOCp6-CB_JFceTcPsnUpVJE";
const TAB_NAME = "Public";
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(TAB_NAME)}`;

export function useTeams() {
  const [teams, setTeams] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(CSV_URL)
      .then((res) => res.text())
      .then((text) => {
        // Google wraps the JSON in a callback — strip it
        const raw = text.match(
          /google\.visualization\.Query\.setResponse\(([\s\S]*?)\);/,
        );
        if (!raw) throw new Error("Invalid response from Google Sheets");

        const json = JSON.parse(raw[1]);
        const rows = json.table.rows;

        // Group teams by sport_key
        const data = {};
        rows.forEach((row) => {
          const sportKey = row.c[0]?.v || "";
          const nom = row.c[1]?.v || "";
          const ville = row.c[2]?.v || "";

          if (!sportKey || !nom) return;
          if (!data[sportKey]) data[sportKey] = [];
          data[sportKey].push({ nom, ville });
        });

        setTeams(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("useTeams fetch error:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { teams, loading, error };
}
