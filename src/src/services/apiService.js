// Keno API Service - Fetches drawn numbers from tvbetframe.com API

const API_URL = "https://tvbetframe.com/api/getResults";

export const fetchDrawnNumbers = async (fetch("https://tvbetframe.com/api/getResults", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"144\", \"Google Chrome\";v=\"144\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-fetch-storage-access": "none",
    "traceparent": "00-baac4c5edae1920187f494d198622d93-f642d3383cc2cbbd-00",
    "ua-pixels": "2843x1191",
    "Referer": "https://tvbetframe.com/?lng=en&clientId=5730&hostname=tvbet.tv&token=TvBet-DemoSite-User-BET&version_signal=1"
  },
  "body": "{\"params\":{\"StartTs\":1770116400,\"FinishTs\":1770202799,\"GameTypes\":[23],\"PartnerClientId\":5730,\"Offset\":0,\"Count\":30,\"lng\":\"en\"},\"userInfo\":{\"client\":5730,\"currency\":\"EUR\",\"balance\":10000000000,\"lng\":\"en\",\"token\":\"eyJhbGciOiJSUzI1NiIsImtpZCI6IkQyNTk5NTU5REMxNkI5NkZGNkU5OTI2NkQ2MTdBMDgyQjk2MjdDNUEiLCJ0eXAiOiJKV1QiLCJ4NXQiOiIwbG1WV2R3V3VXXzI2WkptMWhlZ2dybGlmRm8ifQ.eyJuYmYiOjE3NzAxMjI3NzUsImV4cCI6MTc3MDEyNDU3NSwiaXNzIjoiaHR0cHM6Ly9hcGkubmV0L2lkZW50aXR5LWFwaS8iLCJhdWQiOlsiYmV0cy1hcGkiLCJmZWVkcy1hcGkiLCJzaWduYWxyLWZlZWQtYXBpIiwiZXh0ZXJuYWwtY2xpZW50LWFwaSIsInBhcnRuZXJzLWFwaSIsIndlYiIsInNpZ25hbHItYXBpIiwiY2hhdHMtc2lnbmFsci1hcGkiLCJwcm9tb2NvZGVzLWFwaSIsImh0dHBzOi8vYXBpLm5ldC9pZGVudGl0eS1hcGkvcmVzb3VyY2VzIl0sInRva2VuIjoiIiwidXNlcl9wYXJhbWV0ZXJzIjoie1widXNlcl9pZFwiOjQxODUyNDM5LFwicGFydG5lcl9jbGllbnRfaWRcIjo1NzMwLFwidXNlcl9pc3Rlc3RcIjp0cnVlLFwiY3VycmVuY3lfY29kZVwiOlwiRVVSXCIsXCJsYW5ndWFnZVwiOlwiZW5cIixcInVzZXJfcmVnaXN0cmF0aW9uX2RhdGVcIjpcIjIwMjYtMDItMDNUMTI6NDY6MTRaXCIsXCJ0YWdfaWRcIjpudWxsLFwidXNlcl9jbHVzdGVyXCI6bnVsbCxcInBhcnRuZXJfY2xpZW50X2NsdXN0ZXJcIjpcIkxvd1wiLFwiY291bnRyeV9uYW1lXCI6XCJuelwiLFwiZGV2aWNlX25hbWVcIjpcIlwiLFwiZGV2aWNlX29zXCI6XCJXaW5kb3dzXCIsXCJkZXZpY2VfdHlwZVwiOlwiRGVza3RvcFwiLFwiZGV2aWNlX2Jyb3dzZXJcIjpcIkNocm9tZVwiLFwicGFydG5lcl9pZHNcIjpbNDc5NiwyMDAyNDFdLFwidmlzaXRvcl9pZFwiOm51bGx9IiwidXNlcl9zZXNzaW9uX2lkIjoiZjhjYTMwNWItMzU2NC00ODRmLWFkMDMtZTA3ZTQ5ODk5ZGViIiwicm9sZSI6IlBhcnRuZXJVc2VyIiwicGFydG5lcl9jbGllbnRfaWQiOiI1NzMwIiwicGFydG5lcl91c2VyX2lkIjoiNHM2MjhoZjl2Ny1UdkJldC1EZW1vU2l0ZS1Vc2VyLUJFVC1FVVIiLCJjdXJyZW5jeV9jb2RlIjoiRVVSIiwiY2xpZW50X2lkIjoiUGFydG5lckNsaWVudFVzZXItNTczMC00czYyOGhmOXY3LVR2QmV0LURlbW9TaXRlLVVzZXItQkVULUVVUiIsInVzZXJfaWQiOiI0MTg1MjQzOSIsInNjb3BlIjpbImJldHMtYXBpIiwiZmVlZHMtYXBpIiwic2lnbmFsci1mZWVkLWFwaSIsImV4dGVybmFsLWNsaWVudC1hcGkiLCJwYXJ0bmVycy1hcGkiLCJ3ZWIiLCJzaWduYWxyLWFwaSIsImNoYXRzLXNpZ25hbHItYXBpIiwicHJvbW9jb2Rlcy1hcGkiXX0.INaPrkUOWb9jDgweT5EjULFcCi_Ys7WtI4doPb94KC8LGKvGGea_Jcf_PCWKUVBOQUoY8emCNxr1S1MlU-DCKmW4AfYLzLsDooYiSx2odfg1jDFG9j1cOJrifbIEjRaqIagK4w3vBEcQaC9DkZK5NrHfTvL9xQDuABZ2TwAONHKOeinrnUJJPZgHbyTDo09GMu2jQiGvbTUppfslOEt_dkzy3p8YyNZfboOQU8mpLaUhYfEEfVOvsk1mrjcm5qMKreVo2bQAg-RcB8s9D_sd7MjT6LJNszKhqgYFXBaEsBOj1XWOn_Gne0tTUXaSAcV3zja3U-jC7wzneuFjW-QgsH0qBJpPD3ghCArFKCNLLQR_D_NN9ODYF14PT_pqLMbUsZ6_guichLbZxf2rlgGOTl5aQVs-LFoRy8p9H9ynTxZIqo-soJkVbuPV17N3N0GRokKonHjc35hVEQRrI9s-F1p2_Qw6OIyYkaAFlY9LYqAQpcyFIIyr-1RydM3Q3Y4JEYXTAfkwHdnpfvJdxVxXwielGQao8uUUveghoNYlVDwClTg74ofT0tbp7ZRDSlirg02KKYU3j14Rj6YO3gQFFvOXLHSCkb0DODHppE2sYICJDyraA6GJacuuQHLj7VOBvL37eVTuL-0N-Ih4_D16WRexTEbvfUP2f1Eo32UeVQE\",\"serviceToken\":\"eyJhbGciOiJSUzI1NiIsImtpZCI6IkQyNTk5NTU5REMxNkI5NkZGNkU5OTI2NkQ2MTdBMDgyQjk2MjdDNUEiLCJ0eXAiOiJKV1QiLCJ4NXQiOiIwbG1WV2R3V3VXXzI2WkptMWhlZ2dybGlmRm8ifQ.eyJuYmYiOjE3NzAxMjI3NzEsImV4cCI6MTc3MjcxNDc3MSwiaXNzIjoiaHR0cHM6Ly9hcGkubmV0L2lkZW50aXR5LWFwaS8iLCJhdWQiOlsiaHR0cHM6Ly9hcGkubmV0L2lkZW50aXR5LWFwaS9yZXNvdXJjZXMiLCJiZXRzLWFwaSIsImNoYXRzLXNpZ25hbHItYXBpIiwiZXh0ZXJuYWwtY2xpZW50LWFwaSIsImZlZWRzLWFwaSIsImdhbWVldmVudHR5cGVzLWFwaSIsImphY2twb3RzLWFwaSIsInBhcnRuZXJzLWFwaSIsInBhcnRuZXJ3YWxsZXRzLWFwaSIsInByb21vY29kZXMtYXBpIiwic2lnbmFsci1hcGkiLCJzaWduYWxyLWZlZWQtYXBpIiwid2ViIl0sImNsaWVudF9pZCI6IldlYiIsInJvbGUiOiJXZWIiLCJzY29wZSI6WyJiZXRzLWFwaSIsImNoYXRzLXNpZ25hbHItYXBpIiwiZXh0ZXJuYWwtY2xpZW50LWFwaSIsImZlZWRzLWFwaSIsImdhbWVldmVudHR5cGVzLWFwaSIsImphY2twb3RzLWFwaSIsInBhcnRuZXJzLWFwaSIsInBhcnRuZXJ3YWxsZXRzLWFwaSIsInByb21vY29kZXMtYXBpIiwic2lnbmFsci1hcGkiLCJzaWduYWxyLWZlZWQtYXBpIiwid2ViIl19.AEPNRWJfE84kduKkdhfk1fJ1sq9geCvGB1mNeSvNaTTPb7nLoUyULlSftyD8lSRg2JjQdUmKrhsK6k0lILddu_u5guRnltVAQnS-nvKZ1zUhxJShlbeBRApt9b68lc9NmZaAGFMegp8NDCEK24o2EK-8b22RZuGHf7owQiTMGBlA2rkeu12M1DtasMXKpXI3lLQjVxSzVoMwQSv0YIH5Tnevd-xPYOKOLRPhzg1NfCwjroe6ymAM8xJmJ9k8dc4vVhr_AoTke2v1zyNySGGJC0BvOvT2K-ES3ZE2ms4Nod9oAMsau4XyWCeugpqAFkdBISf9tVHZxkSSWhIFNcg55lrNHOo-NHVfeEYLl3C0uGVj0gNwnhjYvjidKqYzt1zRoED9oif47-roO28SdfbeL6a7SoKZN85UfaMHinKSTcmTGUxIyCHe_q0jBbGBaWZ0dH__yCoHlToFpWskCGFXFEkXnL5tLnGvZtJG-kn-fBkOpVYYRp22uDcg76hiGnOZHDy_O1EAti7qtI-q5EN2fM2p8dSPBF2bLfD1YWxgZPS6NtEenDbK8fvqCSmzH4-nwsEk3XLS90FdlyfDvxh3NG-udlzJJOi-ihpHI5g1MffeGqzJKKanJ2ZjRFT95r_ZR6ShFP6ZE7D-Pdw7AIExdsHdO_I1EpY80ukaBjfm6vw\",\"tagid\":null,\"stage\":\"9999\",\"userId\":41852439,\"partnerUserId\":\"4s628hf9v7-TvBet-DemoSite-User-BET-EUR\",\"visitorId\":\"4141d0bf2d896c7dabc140c7752249e3\",\"refreshToken\":\"4s628hf9v7-TvBet-DemoSite-User-BET\"}}",
  "method": "POST"
}))
  try {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 3600000);
  }
    const requestBody = {
      params: {
        StartTs: oneHourAgo.toISOString(),
        FinishTs: now.toISOString(),
        GameTypes: [23], // Keno game type
        PartnerClientId: 5730,
        Offset: 0,
        Count: 1, // Get the last result
        lng: "en"
      },
      userInfo: {
        client: 5730,
        currency: "EUR",
        balance: 10000000000,
        lng: "en"
      }
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "cache-control": "no-cache",
        "pragma": "no-cache"
      },
      body: JSON.stringify(requestBody),
      mode: "cors",
      credentials: "omit"
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", data);
    
    // Extract numbers from API response based on the response structure
    let numbers = [];
    
    if (data.results && Array.isArray(data.results) && data.results.length > 0) {
      const result = data.results[0];
      // Try different possible field names for the drawn numbers
      if (result.numbers) {
        numbers = Array.isArray(result.numbers) ? result.numbers : [];
      } else if (result.drawnNumbers) {
        numbers = Array.isArray(result.drawnNumbers) ? result.drawnNumbers : [];
      } else if (result.gameNumbers) {
        numbers = Array.isArray(result.gameNumbers) ? result.gameNumbers : [];
      }
    }

    // Return the numbers or fallback to mock data
    if (numbers.length > 0) {
      return numbers.sort((a, b) => a - b);
    }
    
    return generateMockNumbers();
  } catch (error) {
    console.error("Error fetching from API:", error);
    // Fallback to mock data on error
    return generateMockNumbers();
  }
};

// Fallback mock data generator
const generateMockNumbers = () => {
  const numbers = new Set();
  while (numbers.size < 20) {
    numbers.add(Math.floor(Math.random() * 80) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
};

// Generate all Keno numbers (1-80)
export const generateKenoNumbers = () => {
  return Array.from({ length: 80 }, (_, i) => i + 1);
};
};

// Generate all Keno numbers (1-80)
export const generateKenoNumbers = () => {
  return Array.from({ length: 80 }, (_, i) => i + 1);
};
