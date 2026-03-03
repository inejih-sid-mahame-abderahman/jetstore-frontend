// test.js

async function testConnection() {
  const { data, error } = await supabaseClient
    .from("jet")  
    .select("*");

  if (error) {
    console.error("❌ Error:", error.message);
  } else {
    console.log("✅ Connected!");
    console.log(data);
  }
}

testConnection();