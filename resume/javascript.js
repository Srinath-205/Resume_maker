<script>
    document.getElementById("download-btn").addEventListener("click", function() 
    {
        // Collect information from input fields
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var degree = document.getElementById("degree").value;
        var university = document.getElementById("university").value;
        var gradYear = document.getElementById("grad-year").value;
        var jobTitle = document.getElementById("job-title").value;
        var company = document.getElementById("company").value;
        var workYear = document.getElementById("work-year").value;
        var skills = document.getElementById("skills").value;

        // Create resume content
        var resumeContent = "Name: " + name + "\n" +
                            "Email: " + email + "\n" +
                            "Phone: " + phone + "\n\n" +
                            "Education:\n" + degree + ", " + university + " (" + gradYear + ")\n\n" +
                            "Work Experience:\n" + jobTitle + ", " + company + " (" + workYear + ")\n\n" +
                            "Skills:\n" + skills;

        // Create a blob with the resume content
        var blob = new Blob([resumeContent], { type: "text/plain" });

        // Create a URL for the blob
        var url = URL.createObjectURL(blob);

        // Set the download link href attribute to the URL
        var downloadLink = document.getElementById("download-link");
        downloadLink.href = url;

        // Trigger the click event on the download link
        downloadLink.click();

        // Release the object URL to free up memory
        URL.revokeObjectURL(url);
    });
</script>
