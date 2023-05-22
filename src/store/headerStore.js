import create from 'zustand'

const useStore = create(set => ({
    headerTitle: "Main",
    changeTitle: (input) => set(state => ({headerTitle : input} ))
}))
export default useStore