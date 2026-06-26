// import io.restassured.RestAssured;
// import io.restassured.response.Response;

// public class ApiUtils {

//     private static final int MAX_RETRIES = 3;   // retry limit
//     private static final int BASE_DELAY = 1000; // 1 second

//     public static Response retryGet(String endpoint) throws InterruptedException {
//         Response response = null;

//         for (int attempt = 1; attempt <= MAX_RETRIES; attempt++) {
//             response = RestAssured
//                     .given()
//                     .header("Authorization", "Bearer YOUR_TOKEN")
//                     .get(endpoint);

//             if (response.getStatusCode() == 200) {
//                 return response; // ✅ success → exit early
//             }

//             if (attempt < MAX_RETRIES) {
//                 long waitTime = BASE_DELAY * (long) Math.pow(2, attempt - 1); // exponential backoff
//                 System.out.println("Attempt " + attempt + " failed with status "
//                                    + response.getStatusCode() + ". Retrying in " + waitTime + " ms...");
//                 Thread.sleep(waitTime);
//             }
//         }

//         return response; // return last response if all retries failed
//     }
// }

//Usage in Test
// //import org.testng.annotations.Test;
// import static org.hamcrest.Matchers.*;

// public class RetryTest {

//     @Test
//     public void testGetOrdersWithRetry() throws InterruptedException {
//         Response response = ApiUtils.retryGet("https://api.example.com/orders");

//         response.then()
//                 .assertThat()
//                 .statusCode(200)
//                 .body("orders.size()", greaterThan(0));
//     }
// }
