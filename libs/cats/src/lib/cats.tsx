import React, { useEffect, useState } from 'react'
import { CatFactsRequest, CatFact } from './cats.model'

export async function fetchCats() {
  const catFacts = await fetch('https://cat-fact.herokuapp.com/facts')
  const catFactsJson = await  catFacts.json() as CatFactsRequest
  return catFactsJson.all
}

export interface CatsProps {
  initialCatFacts?: CatFact[];
}

export function Cats({ initialCatFacts }: CatsProps = { initialCatFacts: [] }) {
  const [catFacts, setCatFacts] = useState<CatFact[]>(initialCatFacts)
  useEffect(() => {
    const getCats = async () => {
      const catFacts = await fetchCats();
      setCatFacts(catFacts)
    }
    getCats()
  }, [])
  return (
    <div>
      {catFacts?.map(({ text }) => <h1>{text}</h1>)}
    </div>
  )
}
