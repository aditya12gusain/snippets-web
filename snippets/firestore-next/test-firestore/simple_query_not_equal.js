// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_simple_query_not_equal]
const q4 = query(citiesRef, where("capital", "!=", false));
// [END modular_simple_query_not_equal]