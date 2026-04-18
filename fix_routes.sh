#!/bin/bash

# Fix the Routes section indentation and wrapping
sed -i '535,1048s/^                  <Route/                     <Route/g' src/App.tsx

# Now fix unwrapped components in Route elements
sed -i 's/element={<Training />}/element={<LazyRoute Component={Training} \/>/g' src/App.tsx
sed -i 's/element={<IndustrialAnimation />}/element={<IndustrialAnimation \/}/g' src/App.tsx
sed -i 's/element={<Contact />}/element={<LazyRoute Component={Contact} \/>/g' src/App.tsx
sed -i 's/element={<ConsultingServices />}/element={<LazyRoute Component={ConsultingServices} \/>/g' src/App.tsx

echo "Fixed routes"
