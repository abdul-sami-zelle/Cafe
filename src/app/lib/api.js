export const BASE_URL = "https://api.delcofarmersmarket.com";

export async function getLandingPageData() {
  try {
    const res = await fetch(`${BASE_URL}/api/floral-shop/get-sale`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch landing page data");

    const data = await res.json();
    return data.landingPage;
  } catch (err) {
    console.error("API Error:", err);
    return null;
  }
}

export async function getSalesProductData() {
  try {
    const res = await fetch(`${BASE_URL}/api/floral-shop/get-sale`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch product data");

    const data = await res.json();
    return data?.salesPage;
  } catch (err) {
    console.error("API Error:", err);
    return null;
  }
}

export async function getProductsGrid({ page, limit }) {
  try {
    const res = await fetch(
      `${BASE_URL}/api/floral-shop/get/6a0cac2dc4851220d2bce149?limit=${limit}&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    return {
      products: data.products,
      page: data.page,
      limit: data.limit,
      totalPages: data.totalPages,
      totalProducts: data.totalProducts,
    };
  } catch (err) {
    console.error("API Error:", err);
    return { products: [], page: 1, totalPages: 1, totalProducts: 0 };
  }
}




export async function getHeaderDepartments() {
  try {
    const res = await fetch(
      `${BASE_URL}/api/dept-header/get-all`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch departments");
    const data = await res.json();
    return data?.data || [];
  } catch (err) {
    console.error("API Error (departments):", err);
    return [];
  }
}

