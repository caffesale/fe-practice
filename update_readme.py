from os import listdir
from urllib.parse import quote

readme_file = 'README.md'

fm_dir_path = 'frontend-mentor'
fm_dir_root = 'frontend-mentor/'

ct_dir_path = 'icodethis'
ct_dir_root = 'icodethis/'

kevin_path = 'kevin'
kevin_dir_root= 'kevin/'

fm_folders = [f for f in listdir(fm_dir_path)]
ct_folders = [f for f in listdir(ct_dir_path)]
kevin_folders = [f for f in listdir(kevin_path)]

title = "# frontend-mentor, icodethis 연습을 위한 repository입니다" + "\n"

def to_bullet_line(name, dir_root=fm_dir_root):
    return f'- [{name}]({dir_root}/{name})'

def update_readme():
    with open(readme_file, 'r', encoding='utf-8') as f:
        content = f.read()

    updated_contents = ''
    for challenge in fm_folders:
        updated_contents += (to_bullet_line(challenge) + '\n')

    for challenge in ct_folders:
        updated_contents += (to_bullet_line(challenge) + '\n')

    for challenge in kevin_folders:
        updated_contents += (to_bullet_line(challenge) + '\n')

    with open(readme_file, 'w', encoding='utf-8') as f:
        f.write(title + '\n' + updated_contents)

if __name__ == "__main__":
    update_readme()
