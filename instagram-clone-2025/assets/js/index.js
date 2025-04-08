document.addEventListener("DOMContentLoaded", function () {
  const storiesContainer = document.querySelector(".stories");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (!storiesContainer || !prevBtn || !nextBtn) {
    console.error("Carousel elements not found.");
    return;
  }

  const scrollStep = 150; // Adjust for smooth scrolling

  nextBtn.addEventListener("click", function () {
    storiesContainer.scrollBy({ left: scrollStep, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", function () {
    storiesContainer.scrollBy({ left: -scrollStep, behavior: "smooth" });
  });

  // Ensure buttons appear only when needed
  function updateButtons() {
    prevBtn.style.display = storiesContainer.scrollLeft > 0 ? "block" : "none";
    nextBtn.style.display =
      storiesContainer.scrollLeft + storiesContainer.clientWidth <
      storiesContainer.scrollWidth
        ? "block"
        : "none";
  }

  storiesContainer.addEventListener("scroll", updateButtons);
  updateButtons(); // Initialize button visibility
});

document.addEventListener("DOMContentLoaded", function () {
  const likeButtons = document.querySelectorAll(".like-button");

  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("liked");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("postInput");
  const postLink = document.getElementById("postLink");

  inputField.addEventListener("input", function () {
    if (this.value.trim() !== "") {
      postLink.classList.add("visible");
    } else {
      postLink.classList.remove("visible");
    }
  });
});

var search = document.getElementById("search");
var sidebar = document.querySelector(".sidebar");
var titles = document.querySelectorAll(".titles");
var logo1 = document.querySelector(".logo-1");
var logo2 = document.querySelector(".logo-2");

search.addEventListener("click", function () {
  // Check if sidebar is collapsed
  var isCollapsed = sidebar.classList.contains("collapsed");

  // Toggle collapsed class on sidebar
  sidebar.classList.toggle("collapsed");

  // Toggle visibility of titles
  titles.forEach(function (title) {
    title.classList.toggle("hide", !isCollapsed); // Ensures correct state
  });

  // Toggle logo visibility
  logo1.style.display = isCollapsed ? "block" : "none";
  logo2.style.display = isCollapsed ? "none" : "flex";
});

document.addEventListener("DOMContentLoaded", function () {
  var searchBtn = document.getElementById("search"); // Search Button
  var sidebar = document.querySelector(".sidebar"); // Sidebar
  var searchMenu = document.querySelector(".custom-search-menu"); // Search Menu
  var closeSearch = document.getElementById("custom-close-search"); // Close Button

  // Function to toggle search menu and sidebar
  function toggleSearchMenu() {
    if (sidebar.classList.contains("shrunk")) {
      resetSidebar(); // Expand sidebar and hide search menu
    } else {
      sidebar.classList.add("shrunk"); // Shrink sidebar
      searchMenu.style.display = "block"; // Show search menu
    }
  }

  // Function to reset sidebar and search menu
  function resetSidebar() {
    sidebar.classList.remove("shrunk"); // Expand Sidebar
    searchMenu.style.display = "none"; // Hide Search Menu
  }

  // Click on Search Button
  searchBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event from bubbling to document
    toggleSearchMenu();
  });

  // Click on Close Button (Expands sidebar & hides search menu)
  closeSearch.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents event from reaching document
    resetSidebar();
  });

  // Clicking anywhere else expands sidebar & hides search menu
  document.addEventListener("click", function (event) {
    if (
      !sidebar.contains(event.target) && // Click is NOT inside sidebar
      !searchMenu.contains(event.target) && // Click is NOT inside search menu
      event.target !== searchBtn // Click is NOT on search button
    ) {
      resetSidebar();
    }
  });

  // Prevent clicks inside search menu from closing it
  searchMenu.addEventListener("click", function (event) {
    event.stopPropagation(); // Keeps menu open when clicking inside
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Open popup
  document.getElementById("create").addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
  });

  // Close popup
  document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
  });

  // Close popup if clicking outside content
  window.onclick = function (event) {
    let popup = document.getElementById("popup");
    if (event.target === popup) {
      popup.style.display = "none";
    }
  };

  // Handle file selection
  document.getElementById("select-from").addEventListener("click", function () {
    document.getElementById("fileInput").click();
  });

  document
    .getElementById("fileInput")
    .addEventListener("change", function (event) {
      if (event.target.files.length > 0) {
        document.getElementById("postDetails").style.display = "flex"; // Show textarea and post button
      }
    });

  // Handle post button click
  document.getElementById("postButton").addEventListener("click", function () {
    let caption = document.getElementById("caption").value.trim();
    let fileInput = document.getElementById("fileInput");
    let postsContainer = document.querySelector(".posts");
    let storyContainer = document.querySelector(".story-container");

    if (!postsContainer || !storyContainer) {
      console.error("Posts container or story container not found!");
      return;
    }

    if (caption !== "" && fileInput.files.length > 0) {
      let file = fileInput.files[0];
      let reader = new FileReader();

      reader.onload = function (e) {
        let newPost = document.createElement("div");
        newPost.classList.add("instagram-post");
        newPost.innerHTML = `
                <div class="post-header">
            <div class="profile-pic">
              <img src="/assets/images/instagram-com/story1 (3).jpg" alt="" />
            </div>
            <p class="username">
              Mehroz Ahmed
              <span class="sub-p"> <i class="bi bi-dot"></i> Just Now</span>
            </p>
            <span class="time"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
                /></svg
            ></span>
          </div>
              <div class="post-image">
                <img src="${e.target.result}" alt="New Post" />
              </div>
              <div class="post-icons">
                <div class="post-icon-right">
                  <i class="bi bi-heart like-button"></i>
                  <i class="bi bi-chat"></i>
                  <i class="bi bi-share"></i>
                </div>
              </div>
              <span>0 likes</span>
              <div class="post-content">
                <p><strong>Mehroz Ahmed</strong> - ${caption}</p>
              </div>
              <div class="input-container">
                <i class="bi bi-emoji-smile"></i>
                <input type="text" class="comment-input" placeholder="Add a comment..." />
                <a href="#" class="post-comment hidden">Post</a>
              </div>
              <div class="comments-list"></div>
            `;

        // ✅ Insert the new post after the story-container inside .posts
        if (storyContainer.nextElementSibling) {
          storyContainer.nextElementSibling.before(newPost);
        } else {
          postsContainer.appendChild(newPost);
        }

        // Close the popup
        document.getElementById("popup").style.display = "none";
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please select an image and add a caption.");
    }
  });
});

let highlightIndex = 0;
function moveHighlights(direction) {
  const slider = document.querySelector(".highlights-slider");
  const totalItems = document.querySelectorAll(".highlight-item").length;
  const visibleItems = 3;
  const maxIndex = totalItems - visibleItems;
  highlightIndex += direction;
  if (highlightIndex < 0) highlightIndex = 0;
  if (highlightIndex > maxIndex) highlightIndex = maxIndex;
  slider.style.transform = `translateX(${-highlightIndex * 70}px)`;
}

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and contents
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // Add active class to selected tab and corresponding content
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
