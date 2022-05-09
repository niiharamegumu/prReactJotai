import { atom } from 'jotai'

export const countAtom = atom(0)

export const nameAtom = atom('keeth')
export const upperNameAtom = atom((get) => get(nameAtom).toUpperCase())
