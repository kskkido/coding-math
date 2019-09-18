export const createId = (() => {
  let i = 0;

  return () => (
    i += 1
  )
})
