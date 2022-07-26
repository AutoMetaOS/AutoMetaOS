read -p "Add Commit Message: " msg;

git add .;
git commit -m "$msg";
echo "Pushing: $msg";
git push;